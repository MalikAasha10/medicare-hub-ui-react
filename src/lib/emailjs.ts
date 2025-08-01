import emailjs from 'emailjs-com';

// EmailJS configuration
export const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  templateId: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
  userId: 'YOUR_USER_ID', // Replace with your EmailJS user ID
};

export const sendEmail = async (formData: Record<string, any>) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      {
        to_email: 'noumanreal@gmail.com',
        ...formData,
      },
      EMAILJS_CONFIG.userId
    );
    return { success: true, response };
  } catch (error) {
    console.error('EmailJS error:', error);
    return { success: false, error };
  }
};

// Form validation helpers
export const validateZipCode = (zipCode: string): boolean => {
  return /^\d{5}(-\d{4})?$/.test(zipCode);
};

export const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validatePhone = (phone: string): boolean => {
  return /^\d{10,15}$/.test(phone.replace(/\D/g, ''));
};