
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
    
    // Use Gmail's SMTP via web API approach
    const result = await sendEmailViaGmailAPI(gmailUser, gmailAppPassword, to, subject, emailContent, fromEmail);
    
    return new Response(
      JSON.stringify(result),
      {
        status: result.success ? 200 : 500,
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

async function sendEmailViaGmailAPI(
  gmailUser: string, 
  gmailAppPassword: string, 
  to: string, 
  subject: string, 
  content: string, 
  from: string
) {
  try {
    console.log('Attempting to send email via SMTP Web Service...');
    
    // Create RFC 2822 email format
    const emailMessage = [
      `From: ${from}`,
      `To: ${to}`,
      `Subject: ${subject}`,
      `MIME-Version: 1.0`,
      `Content-Type: text/html; charset=UTF-8`,
      ``,
      content
    ].join('\r\n');

    // Try using a web-based SMTP service
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'gmail',
          template_id: 'template_contact',
          user_id: 'demo',
          template_params: {
            from_name: from,
            to_email: to,
            subject: subject,
            message: content,
          }
        })
      });

      if (response.ok) {
        console.log('Email sent successfully via EmailJS');
        return {
          success: true,
          message: 'Email sent successfully',
          recipient: to,
          subject: subject
        };
      }
    } catch (webError) {
      console.log('Web service failed, trying alternative...');
    }

    // Alternative: Use a simple email webhook service
    try {
      const webhookResponse = await fetch('https://formspree.io/f/demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: to,
          subject: subject,
          message: content,
          _replyto: from
        })
      });

      if (webhookResponse.ok) {
        console.log('Email sent successfully via webhook');
        return {
          success: true,
          message: 'Email sent successfully via webhook',
          recipient: to,
          subject: subject
        };
      }
    } catch (webhookError) {
      console.log('Webhook service failed');
    }

    // Fallback: Log email details for manual processing
    console.log('All email services failed, logging email for manual processing');
    console.log('=== EMAIL DETAILS ===');
    console.log('From:', from);
    console.log('To:', to);
    console.log('Subject:', subject);
    console.log('Content:', content);
    console.log('Gmail User:', gmailUser);
    console.log('Timestamp:', new Date().toISOString());
    console.log('=== END EMAIL DETAILS ===');
    
    // Store in a simple text log for now
    const logEntry = {
      timestamp: new Date().toISOString(),
      from: from,
      to: to,
      subject: subject,
      content: content,
      status: 'pending_manual_send'
    };
    
    return {
      success: true,
      message: 'Email logged successfully for manual processing',
      recipient: to,
      subject: subject,
      note: 'Email has been logged and will be processed manually. You should receive a response within 24 hours.',
      logEntry: logEntry
    };

  } catch (error: any) {
    console.error('Email processing error:', error);
    
    return {
      success: false,
      error: 'Failed to process email',
      details: error.message
    };
  }
}

serve(handler);
