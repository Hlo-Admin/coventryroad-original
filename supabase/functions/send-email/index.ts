
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

    const emailContent = html || text || '';
    const fromEmail = from || gmailUser;
    
    console.log('Sending email via SMTP...');
    console.log('Using Gmail user:', gmailUser);

    // Use direct SMTP connection
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

  } catch (error: any) {
    console.error('Error in send-email function:', error);
    
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
};

async function sendViaDirectSMTP(
  gmailUser: string, 
  gmailAppPassword: string, 
  to: string, 
  subject: string, 
  content: string, 
  from: string
) {
  try {
    console.log('Attempting SMTP connection to Gmail...');
    
    // Connect to Gmail SMTP server
    const conn = await Deno.connect({
      hostname: "smtp.gmail.com",
      port: 587,
    });

    console.log('Connected to SMTP server, starting TLS...');

    // Start TLS connection
    const tlsConn = await Deno.startTls(conn, { 
      hostname: "smtp.gmail.com",
      alpnProtocols: ["h2", "http/1.1"]
    });

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    // Helper function to send command and read response
    async function sendCommand(command: string): Promise<string> {
      console.log('Sending command:', command.trim());
      await tlsConn.write(encoder.encode(command));
      
      const buffer = new Uint8Array(1024);
      const n = await tlsConn.read(buffer);
      const response = n ? decoder.decode(buffer.subarray(0, n)) : '';
      console.log('Received response:', response.trim());
      
      if (response.startsWith('4') || response.startsWith('5')) {
        throw new Error(`SMTP Error: ${response}`);
      }
      
      return response;
    }

    // Read initial greeting
    const buffer = new Uint8Array(1024);
    const n = await tlsConn.read(buffer);
    const greeting = n ? decoder.decode(buffer.subarray(0, n)) : '';
    console.log('Server greeting:', greeting.trim());

    // SMTP conversation
    await sendCommand(`EHLO localhost\r\n`);
    
    // Authenticate
    const authString = btoa(`\0${gmailUser}\0${gmailAppPassword}`);
    await sendCommand(`AUTH PLAIN ${authString}\r\n`);
    
    // Send email
    await sendCommand(`MAIL FROM:<${gmailUser}>\r\n`);
    await sendCommand(`RCPT TO:<${to}>\r\n`);
    await sendCommand(`DATA\r\n`);
    
    // Email content
    const emailMessage = [
      `From: ${from}`,
      `To: ${to}`,
      `Subject: ${subject}`,
      `Content-Type: text/html; charset=utf-8`,
      ``,
      content,
      ``,
      `.`
    ].join('\r\n');
    
    await sendCommand(`${emailMessage}\r\n`);
    await sendCommand(`QUIT\r\n`);

    tlsConn.close();

    console.log('Email sent successfully via SMTP');
    return {
      success: true,
      message: 'Email sent successfully via SMTP',
      recipient: to,
      subject: subject
    };

  } catch (error: any) {
    console.error('SMTP Error:', error);
    
    return {
      success: false,
      error: 'Failed to send email via SMTP',
      details: error.message
    };
  }
}

serve(handler);
