
import emailjs from 'emailjs-com';

// EmailJS configuration
export const EMAILJS_CONFIG = {
  serviceId: 'service_odz7s8j',
  templateId: 'service_tlbhpxh',
  userId: 'PFo4bykHcKQDo4IhL',
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
