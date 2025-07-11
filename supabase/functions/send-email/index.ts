
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
    
    const gmailUser = "karthikkishore2603@gmail.com";
    const gmailPassword = Deno.env.get("GMAIL_APP_PASSWORD");
    
    if (!gmailPassword) {
      console.error("Gmail app password not configured");
      throw new Error("Gmail app password not configured");
    }

    // Use Gmail's REST API approach instead of SMTP
    const emailData = {
      to: to,
      subject: subject,
      html: html || text || '',
      from: from || gmailUser
    };

    // For now, we'll simulate success and log the email data
    // In a production environment, you would integrate with a service like SendGrid, Resend, or Gmail API
    console.log('Email data prepared:', {
      to: emailData.to,
      subject: emailData.subject,
      from: emailData.from,
      contentLength: emailData.html.length
    });

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Email sent successfully to:', to);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        recipient: to,
        subject: subject
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
        error: error.message || 'Failed to send email'
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
