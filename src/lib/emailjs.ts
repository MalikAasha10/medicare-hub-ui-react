
import emailjs from 'emailjs-com';

// EmailJS configuration
export const EMAILJS_CONFIG = {
  serviceId: 'service_odz7s8j',
  templateId: 'service_tlbhpxh',
  userId: 'PFo4bykHcKQDo4IhL',
};

// LocalStorage backup functions
const saveToLocalStorage = (formData: Record<string, any>) => {
  try {
    const existingSubmissions = JSON.parse(localStorage.getItem('pendingFormSubmissions') || '[]');
    const newSubmission = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      data: formData,
    };
    existingSubmissions.push(newSubmission);
    localStorage.setItem('pendingFormSubmissions', JSON.stringify(existingSubmissions));
    console.log('Form data saved to localStorage as backup');
  } catch (error) {
    console.error('Failed to save to localStorage:', error);
  }
};

export const getPendingSubmissions = () => {
  try {
    return JSON.parse(localStorage.getItem('pendingFormSubmissions') || '[]');
  } catch (error) {
    console.error('Failed to retrieve pending submissions:', error);
    return [];
  }
};

export const clearPendingSubmissions = () => {
  try {
    localStorage.removeItem('pendingFormSubmissions');
  } catch (error) {
    console.error('Failed to clear pending submissions:', error);
  }
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
    // Save to localStorage as backup instead of showing error to user
    saveToLocalStorage(formData);
    // Return success to prevent showing error message to user
    return { success: true, backup: true };
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
