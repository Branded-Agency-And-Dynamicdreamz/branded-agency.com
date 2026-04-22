import { IS_PRODUCTION } from "./constants"

/**
 * Meta Pixel utility functions for tracking events
 */

// Meta Pixel ID
const META_PIXEL_ID = "1517343985949694"


/**
 * Track PageView event
 * This is automatically called on page load via html.js but can be called manually for route changes
 */
export const trackPageView = () => {
  if (typeof window !== "undefined" && IS_PRODUCTION && window.fbq) {
    window.fbq("track", "PageView")
  }
}

/**
 * Track PDF Download event
 * Should be called when users submit their info to get a PDF download
 * @param {string} pdfName - Name of the PDF being downloaded
 */
export const trackPDFDownload = (pdfName = "PDF Download") => {
  if (typeof window !== "undefined" && IS_PRODUCTION && window.fbq) {
    window.fbq("track", "Lead", {
      content_name: pdfName,
      content_category: "PDF Download",
    })
  }
}

/**
 * Track Lead Form Submission event
 * Should be called for all forms on the BRANDED website
 * @param {string} formType - Type of form (e.g., "Contact Form", "Newsletter Signup")
 */
export const trackLeadFormSubmission = (formType = "Form Submission") => {
  if (typeof window !== "undefined" && IS_PRODUCTION && window.fbq) {
    window.fbq("track", "Lead", {
      content_name: formType,
      content_category: "Lead Generation",
    })
  }
}

/**
 * Track custom conversion event for "Get in touch" button clicks
 * This is a custom event as specified in the requirements
 */
export const trackGetInTouchClick = () => {
  if (typeof window !== "undefined" && IS_PRODUCTION && window.fbq) {
    window.fbq("track", "Custom", {
      event_name: "GetInTouchClick",
      content_name: "Get in touch button",
      content_category: "Contact Intent",
    })
  }
}

/**
 * Track custom events with custom parameters
 * @param {string} eventName - Name of the custom event
 * @param {Object} parameters - Additional parameters to track
 */
export const trackCustomEvent = (eventName, parameters = {}) => {
  if (typeof window !== "undefined" && IS_PRODUCTION && window.fbq) {
    window.fbq("track", "Custom", {
      event_name: eventName,
      ...parameters,
    })
  }
}

/**
 * Track purchase event (if needed for e-commerce)
 * @param {number} value - Purchase value
 * @param {string} currency - Currency code (default: USD)
 * @param {Object} parameters - Additional parameters
 */
export const trackPurchase = (value, currency = "USD", parameters = {}) => {
  if (typeof window !== "undefined" && IS_PRODUCTION && window.fbq) {
    window.fbq("track", "Purchase", {
      value: value,
      currency: currency,
      ...parameters,
    })
  }
}
