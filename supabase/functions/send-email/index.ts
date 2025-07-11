
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
    const gmailAppPassword = Deno.env.get("GMAIL_APP_PASSWORD");
    const gmailRefreshToken = Deno.env.get("GMAIL_REFRESH_TOKEN");
    const gmailClientId = Deno.env.get("GMAIL_CLIENT_ID");
    const gmailClientSecret = Deno.env.get("GMAIL_CLIENT_SECRET");
    
    if (!gmailRefreshToken || !gmailClientId || !gmailClientSecret) {
      console.error("Gmail OAuth credentials not configured");
      throw new Error("Gmail OAuth credentials not configured. Please set GMAIL_REFRESH_TOKEN, GMAIL_CLIENT_ID, and GMAIL_CLIENT_SECRET");
    }

    // Get OAuth2 access token
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: gmailClientId,
        client_secret: gmailClientSecret,
        refresh_token: gmailRefreshToken,
        grant_type: 'refresh_token',
      }),
    });

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      console.error('Failed to get OAuth token:', errorText);
      throw new Error('Failed to authenticate with Gmail API');
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Create email content in RFC2822 format
    const emailContent = [
      `From: ${from || gmailUser}`,
      `To: ${to}`,
      `Subject: ${subject}`,
      'MIME-Version: 1.0',
      'Content-Type: text/html; charset=UTF-8',
      '',
      html || text || ''
    ].join('\r\n');

    // Encode email content in base64url format
    const encodedEmail = btoa(emailContent)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    // Send email using Gmail API
    const gmailResponse = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        raw: encodedEmail
      }),
    });

    if (!gmailResponse.ok) {
      const errorText = await gmailResponse.text();
      console.error('Gmail API error:', errorText);
      throw new Error(`Gmail API error: ${gmailResponse.status} - ${errorText}`);
    }

    const gmailResult = await gmailResponse.json();
    console.log('Email sent successfully via Gmail API:', gmailResult);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully via Gmail API',
        recipient: to,
        subject: subject,
        messageId: gmailResult.id
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
