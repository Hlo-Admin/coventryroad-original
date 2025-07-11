
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
    // In a real application, you would send this to your backend API
    // For now, we'll simulate the email sending process
    
    const emailData = {
      from: "karthikkishore2603@gmail.com",
      to: "karthikkishore2603@gmail.com", // Fixed the typo in your email
      subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        <p><strong>Service:</strong> ${formData.service || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
    };

    // TODO: Replace this with actual API call to your backend
    // const response = await fetch('/api/send-email', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(emailData),
    // });
    
    // For demonstration, we'll log the email data and simulate success
    console.log('Email data to be sent:', emailData);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};
