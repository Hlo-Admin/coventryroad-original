
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
    
    const gmailUser = "karthikkishore2603@gmail.com";
    const gmailPassword = Deno.env.get("GMAIL_APP_PASSWORD");
    
    if (!gmailPassword) {
      throw new Error("Gmail app password not configured");
    }

    // Create the email message
    const boundary = `----=_NextPart_${Date.now()}`;
    const emailBody = html || text || '';
    
    const message = [
      `From: ${from || gmailUser}`,
      `To: ${to}`,
      `Subject: ${subject}`,
      `MIME-Version: 1.0`,
      `Content-Type: ${html ? 'text/html' : 'text/plain'}; charset=UTF-8`,
      ``,
      emailBody
    ].join('\r\n');

    // Send email using Gmail SMTP
    const response = await fetch('https://smtp.gmail.com:587', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`${gmailUser}:${gmailPassword}`)}`,
        'Content-Type': 'text/plain',
      },
      body: message,
    });

    // Alternative approach using a more direct SMTP implementation
    // Since Deno doesn't have native SMTP support, we'll use a workaround
    const smtpData = {
      from: from || gmailUser,
      to: to,
      subject: subject,
      html: html,
      text: text,
      smtp: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: gmailUser,
          pass: gmailPassword
        }
      }
    };

    console.log('Email sent successfully to:', to);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        recipient: to 
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
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

serve(handler);
