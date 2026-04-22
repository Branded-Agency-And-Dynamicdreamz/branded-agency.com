import React, { useEffect } from "react"
import { Global } from "@emotion/react"
import ThemeTopLayout from "gatsby-theme-material-ui-top-layout/src/components/top-layout"

import { useMediaQuery } from "@mui/material"
import { GlobalStyles } from "../../styles/app.styles"
import { isBrowser } from "../../utils/utils"

export default function TopLayout({ children, theme }) {
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })
  let navHeight = theme.navHeight
  let sectionPadding = theme.sectionPadding

  if (isMd) {
    navHeight = 72
    sectionPadding = "padding-top: 5em; padding-bottom: 5em;"
  }

  useEffect(() => {
    if (isBrowser) {
      const documentHeight = () => {
        const doc = document.documentElement
        doc.style.setProperty("--viewport-height", `${window.innerHeight}px`)
      }
      window.addEventListener("resize", documentHeight)
      documentHeight()

      // if (IS_PRODUCTION && isBrowser()) {
      //   hotjar.initialize(process.env.NEXT_PUBLIC_HJID, 6);
      // }
    }
  }, [])

  return (
    <ThemeTopLayout theme={{ ...theme, navHeight, sectionPadding }}>
      <Global styles={GlobalStyles} />
      {children}
    </ThemeTopLayout>
  )
}
