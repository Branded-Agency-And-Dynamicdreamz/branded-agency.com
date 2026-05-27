/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Optimized local font loading
import "@fontsource/mulish/400.css"
import "@fontsource/mulish/500.css"
import "@fontsource/mulish/700.css"

import "@fontsource/bebas-neue"

// Existing imports
import Provider from "./src/provider"
import { IS_PRODUCTION } from "./src/utils/constants"

export const wrapRootElement = Provider

// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#onRouteUpdate
export const onRouteUpdate = ({ location, prevLocation }) => {
  if (IS_PRODUCTION && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-11137911214/xyNUCLeyxK4YEK6T_L4p",
    })
  }

  // Track Meta Pixel PageView on route changes
  if (IS_PRODUCTION && window.fbq) {
    window.fbq("track", "PageView")
  }

  // window.scrollTo(0, 0)
}