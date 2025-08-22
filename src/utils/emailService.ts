// Kept for type compatibility
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

// Deprecated: Email sending now handled via Google Sheets script
export const sendContactEmail = async () => {
  console.warn(
    "Email sending is no longer supported. Forms now submit directly to Google Sheets."
  );
  return false;
};
