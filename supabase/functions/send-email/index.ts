
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface EmailRequest {
  to: string;
  subject: string;
  html?: string;
  text?: string;
  from?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { to, subject, html, text, from }: EmailRequest = await req.json();
    
    console.log('Sending email to:', to);
    console.log('Subject:', subject);
    
    const gmailUser = Deno.env.get("GMAIL_USER") || "karthikkishore2603@gmail.com";
    const gmailAppPassword = Deno.env.get("GMAIL_APP_PASSWORD");
    
    if (!gmailAppPassword) {
      console.error("Gmail app password not configured");
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Gmail app password not configured. Please set GMAIL_APP_PASSWORD in Supabase secrets"
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    // Create email content
    const emailContent = html || text || '';
    const fromEmail = from || gmailUser;
    
    console.log('Attempting to send email via Gmail API...');
    console.log('Using Gmail user:', gmailUser);

    // Create the email message in RFC 2822 format
    const boundary = "boundary_" + Math.random().toString(36).substr(2, 9);
    const emailMessage = [
      `From: ${fromEmail}`,
      `To: ${to}`,
      `Subject: ${subject}`,
      'MIME-Version: 1.0',
      `Content-Type: multipart/alternative; boundary="${boundary}"`,
      '',
      `--${boundary}`,
      'Content-Type: text/plain; charset=utf-8',
      '',
      text || emailContent.replace(/<[^>]*>/g, ''), // Strip HTML for plain text
      '',
      `--${boundary}`,
      'Content-Type: text/html; charset=utf-8',
      '',
      emailContent,
      '',
      `--${boundary}--`
    ].join('\n');

    // Encode the message in base64
    const encodedMessage = btoa(emailMessage).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

    // Use Gmail API instead of SMTP
    const response = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${await getGoogleAccessToken(gmailUser, gmailAppPassword)}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        raw: encodedMessage
      })
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Email sent successfully via Gmail API:', result);

      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Email sent successfully',
          recipient: to,
          subject: subject,
          messageId: result.id
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    } else {
      const error = await response.text();
      console.error('Gmail API Error:', error);
      
      // Fallback to direct SMTP with fetch-based approach
      console.log('Falling back to direct SMTP...');
      
      const smtpResponse = await sendViaDirectSMTP(gmailUser, gmailAppPassword, to, subject, emailContent, fromEmail);
      
      return new Response(
        JSON.stringify(smtpResponse),
        {
          status: smtpResponse.success ? 200 : 500,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

  } catch (error: any) {
    console.error('Error in send-email function:', error);
    
    // Try direct SMTP as final fallback
    try {
      const { to, subject, html, text, from }: EmailRequest = await req.json();
      const gmailUser = Deno.env.get("GMAIL_USER") || "karthikkishore2603@gmail.com";
      const gmailAppPassword = Deno.env.get("GMAIL_APP_PASSWORD");
      const emailContent = html || text || '';
      const fromEmail = from || gmailUser;
      
      const smtpResponse = await sendViaDirectSMTP(gmailUser, gmailAppPassword!, to, subject, emailContent, fromEmail);
      
      return new Response(
        JSON.stringify(smtpResponse),
        {
          status: smtpResponse.success ? 200 : 500,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    } catch (fallbackError) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: error.message || 'Failed to process email request'
        }),
        {
          status: 500,
          headers: { 
            'Content-Type': 'application/json', 
            ...corsHeaders 
          },
        }
      );
    }
  }
};

async function getGoogleAccessToken(email: string, appPassword: string): Promise<string> {
  // This is a simplified approach - in production you'd use OAuth2
  // For now, we'll use the app password directly in SMTP fallback
  throw new Error("OAuth2 not implemented - falling back to SMTP");
}

async function sendViaDirectSMTP(
  gmailUser: string, 
  gmailAppPassword: string, 
  to: string, 
  subject: string, 
  content: string, 
  from: string
) {
  try {
    console.log('Attempting direct SMTP connection...');
    
    // Use a more direct approach with raw TCP connection
    const conn = await Deno.connect({
      hostname: "smtp.gmail.com",
      port: 587,
    });

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    // Start TLS handshake
    const tlsConn = await Deno.startTls(conn, { hostname: "smtp.gmail.com" });

    // SMTP commands
    const commands = [
      `EHLO localhost\r\n`,
      `AUTH PLAIN ${btoa(`\0${gmailUser}\0${gmailAppPassword}`)}\r\n`,
      `MAIL FROM:<${gmailUser}>\r\n`,
      `RCPT TO:<${to}>\r\n`,
      `DATA\r\n`,
      `From: ${from}\r\nTo: ${to}\r\nSubject: ${subject}\r\nContent-Type: text/html; charset=utf-8\r\n\r\n${content}\r\n.\r\n`,
      `QUIT\r\n`
    ];

    for (const command of commands) {
      await tlsConn.write(encoder.encode(command));
      
      // Read response
      const buffer = new Uint8Array(1024);
      const n = await tlsConn.read(buffer);
      if (n) {
        const response = decoder.decode(buffer.subarray(0, n));
        console.log('SMTP Response:', response);
        
        if (response.startsWith('5')) {
          throw new Error(`SMTP Error: ${response}`);
        }
      }
    }

    tlsConn.close();

    return {
      success: true,
      message: 'Email sent successfully via direct SMTP',
      recipient: to,
      subject: subject
    };

  } catch (smtpError) {
    console.error('Direct SMTP failed:', smtpError);
    
    return {
      success: false,
      error: 'Failed to send email via SMTP',
      details: smtpError.message
    };
  }
}

serve(handler);
