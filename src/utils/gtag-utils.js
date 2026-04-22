import { getSessionStorageItem, isBrowser } from "./utils"
import { IS_PRODUCTION } from "./constants"

export const getGtagUtmParams = () => {
  if (!isBrowser) {
    return {}
  }
  const urlParams = new URLSearchParams(window.location.search)
  const utm_source =
    urlParams.get("utm_source") || getSessionStorageItem("utm_source")
  const utm_medium =
    urlParams.get("utm_medium") || getSessionStorageItem("utm_medium")
  const utm_campaign =
    urlParams.get("utm_campaign") || getSessionStorageItem("utm_campaign")
  const url = window.location.href
  return { utm_source, utm_medium, utm_campaign, url }
}

export const gtagCallClickEvent = () => {
  if (isBrowser && IS_PRODUCTION && window.gtag) {
    window.gtag("event", "click_to_call", {
      event_value: {
        ...getGtagUtmParams(),
      },
    })
  }
}

export const gtagFormSubmission = label => {
  if (isBrowser && IS_PRODUCTION && window.gtag) {
    window.gtag("event", "form_submitted", {
      event_category: "Form Submission",
      event_label: label,
      event_value: {
        ...getGtagUtmParams(),
      },
    })
  }
}

export const gtagAdwordsConversion = sendTo => {
  if (isBrowser && IS_PRODUCTION && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: sendTo,
    })
  }
}
