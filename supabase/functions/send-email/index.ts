
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";

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
      throw new Error("Gmail app password not configured. Please set GMAIL_APP_PASSWORD in Supabase secrets");
    }

    // Create email content
    const emailContent = html || text || '';
    const fromEmail = from || gmailUser;
    
    console.log('Attempting to send email via SMTP...');

    try {
      // Create SMTP client
      const client = new SmtpClient();

      // Connect to Gmail SMTP server
      await client.connectTLS({
        hostname: "smtp.gmail.com",
        port: 587,
        username: gmailUser,
        password: gmailAppPassword,
      });

      // Send email
      await client.send({
        from: fromEmail,
        to: to,
        subject: subject,
        content: emailContent,
        html: emailContent,
      });

      // Close connection
      await client.close();

      console.log('Email sent successfully via SMTP');

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

    } catch (smtpError) {
      console.error('SMTP Error:', smtpError);
      
      // Try alternative SMTP configuration
      try {
        console.log('Trying alternative SMTP configuration...');
        
        const altClient = new SmtpClient();

        // Try with SSL on port 465
        await altClient.connectTLS({
          hostname: "smtp.gmail.com",
          port: 465,
          username: gmailUser,
          password: gmailAppPassword,
        });

        await altClient.send({
          from: gmailUser,
          to: to,
          subject: subject,
          content: emailContent,
          html: emailContent,
        });

        await altClient.close();

        console.log('Email sent successfully via alternative SMTP');

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

      } catch (altError) {
        console.error('Alternative SMTP also failed:', altError);
        
        // Log the email details for debugging
        console.log('Email would have been sent:', {
          from: gmailUser,
          to: to,
          subject: subject,
          content: emailContent.substring(0, 100) + '...'
        });
        
        // Return error for frontend to handle
        return new Response(
          JSON.stringify({ 
            success: false, 
            error: 'Failed to send email via SMTP',
            details: altError.message
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
    }

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

serve(handler);
