// Google Analytics event tracking functions

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}

/**
 * Track button clicks
 */
export const trackButtonClick = (buttonName: string, location: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'button_click',
      button_name: buttonName,
      location: location,
    });
  }
};

/**
 * Track booking button clicks
 */
export const trackBookingClick = (source: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'booking_initiated',
      // `source` is reserved for traffic attribution in GA4. A custom name
      // keeps CTA placement data from appearing as a session source.
      cta_location: source,
      event_category: 'engagement',
      event_label: 'Boka nu',
    });
  }
};


/**
 * Track symptom page views
 */
export const trackSymptomView = (symptomName: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'symptom_page_view',
      symptom: symptomName,
      event_category: 'engagement',
    });
  }
};

/**
 * Track navigation through symptom funnel
 */
export const trackSymptomFunnel = (step: string, symptomName: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'symptom_funnel',
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
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'outbound_click',
      event_category: 'outbound',
      event_label: linkName,
      url: url,
    });
  }
};
