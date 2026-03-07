/**
 * Utility for Google Analytics 4 tracking
 */

export const trackEvent = (eventName, params = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, params);
  } else {
    console.warn('Gtag not found. Event not tracked:', eventName, params);
  }
};

export const trackPageView = (pagePath) => {
  if (window.gtag) {
    window.gtag('config', 'G-P686BT8EXK', {
      page_path: pagePath,
    });
  }
};

export const GA_EVENTS = {
  PAYMENT: 'payment',
  UPLOAD_RECORD: 'upload_record',
  CHAT_AI: 'chat_ai',
  CREATE_REMINDER: 'create_reminder',
  VIEW_HOME: 'view_home',
};
