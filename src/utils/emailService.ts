
import emailjs from '@emailjs/browser';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

// Initialize EmailJS with your public key
// You'll need to replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace this
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace this  
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace this

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    console.log('Sending email with data:', formData);
    
    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      service: formData.service || 'Not specified',
      message: formData.message,
      to_email: 'karthikkishore2603@gmail.com',
    };

    // Send email using EmailJS
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
    
    console.log('Email sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};
