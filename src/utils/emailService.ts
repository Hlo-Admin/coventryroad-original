
import { supabase } from '@/integrations/supabase/client';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    console.log('Sending email with data:', formData);
    
    // Prepare email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #63316b;">New Contact Form Submission</h2>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Contact Details:</h3>
          <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          <p><strong>Service of Interest:</strong> ${formData.service || 'Not specified'}</p>
        </div>
        
        <div style="background-color: #f0f0f0; padding: 20px; border-radius: 8px;">
          <h3 style="color: #333; margin-top: 0;">Message:</h3>
          <p style="white-space: pre-wrap;">${formData.message}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #666;">
          <p>This email was sent from the Coventry Road Dental contact form.</p>
          <p>Please reply directly to the customer's email: ${formData.email}</p>
        </div>
      </div>
    `;

    // Send email using Supabase Edge Function
    const { data, error } = await supabase.functions.invoke('send-email', {
      body: {
        to: 'karthikkishore2603@gmail.com',
        subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
        html: emailHtml,
        from: `${formData.firstName} ${formData.lastName} <${formData.email}>`
      }
    });

    if (error) {
      console.error('Error sending email:', error);
      return false;
    }

    console.log('Email sent successfully:', data);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};
