import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = (measurementId: string) => {
  ReactGA.initialize(measurementId);
};

// Track page views
export const trackPageView = (page: string) => {
  ReactGA.send({ hitType: 'pageview', page });
};

// Track events
export const trackEvent = (action: string, category: string, label?: string) => {
  ReactGA.event({
    action,
    category,
    label,
  });
};

// Track form submissions
export const trackFormSubmission = (formType: string) => {
  trackEvent('Form Submission', 'Forms', formType);
};