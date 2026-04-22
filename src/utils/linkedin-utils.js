import { IS_PRODUCTION } from "./constants"

export const linkedinConversionTrack = conversionId => {
  if (!window.lintrk || !IS_PRODUCTION) {
    return
  }
  window.lintrk("track", {
    conversion_id: conversionId,
  })
}
