// Google Analytics event tracking functions

declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

/**
 * Track button clicks
 */
export const trackButtonClick = (buttonName: string, location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'button_click', {
      button_name: buttonName,
      location: location,
    });
  }
};

/**
 * Track booking button clicks
 */
export const trackBookingClick = (source: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'booking_initiated', {
      source: source,
      event_category: 'engagement',
      event_label: 'Boka nu',
    });
  }
};

/**
 * Track consultation form views
 */
export const trackConsultationView = (source: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'consultation_form_view', {
      source: source,
      event_category: 'engagement',
    });
  }
};

/**
 * Track consultation form submissions
 */
export const trackConsultationSubmit = (problemAreas: string[]) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'consultation_submit', {
      problem_areas: problemAreas.join(', '),
      event_category: 'conversion',
      event_label: 'Form Submission',
    });
  }
};

/**
 * Track symptom page views
 */
export const trackSymptomView = (symptomName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'symptom_page_view', {
      symptom: symptomName,
      event_category: 'engagement',
    });
  }
};

/**
 * Track navigation through symptom funnel
 */
export const trackSymptomFunnel = (step: string, symptomName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'symptom_funnel', {
      funnel_step: step,
      symptom: symptomName,
      event_category: 'funnel',
    });
  }
};

/**
 * Track outbound link clicks
 */
export const trackOutboundLink = (url: string, linkName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'outbound',
      event_label: linkName,
      transport_type: 'beacon',
      url: url,
    });
  }
};
