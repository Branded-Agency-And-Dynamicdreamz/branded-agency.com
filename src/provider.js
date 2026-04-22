import React, { useEffect, useMemo, useState } from "react"
import { Global } from "@emotion/react"
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material"
import { createTheme } from "@mui/material/styles"

import themeConfig from "./gatsby-theme-material-ui-top-layout/theme"
import { GlobalStyles } from "./styles/app.styles"
import { isBrowser } from "./utils/utils"

export const colorsContext = React.createContext()

const AppThemeProvider = ({ children }) => {
  const isMd = useMediaQuery(themeConfig.breakpoints.up("md"), {
    defaultMatches: true,
    noSsr: true,
  })

  const theme = useMemo(
    () =>
      createTheme(themeConfig, {
        navHeight: isMd ? 72 : themeConfig.navHeight,
        sectionPadding: isMd
          ? "padding-top: 5em; padding-bottom: 5em;"
          : themeConfig.sectionPadding,
      }),
    [isMd],
  )

  useEffect(() => {
    if (!isBrowser) {
      return
    }

    const setViewportHeight = () => {
      const doc = document.documentElement
      doc.style.setProperty("--viewport-height", `${window.innerHeight}px`)
    }

    window.addEventListener("resize", setViewportHeight)
    setViewportHeight()

    return () => {
      window.removeEventListener("resize", setViewportHeight)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Global styles={GlobalStyles} />
      {children}
    </ThemeProvider>
  )
}

const Provider = props => {
  const [savedColors, setSavedColors] = useState([])

  return (
    <colorsContext.Provider
      value={{
        savedColors,
        addColor: color =>
          setSavedColors(savedColors => [...savedColors, color]),
      }}
    >
      <AppThemeProvider>{props.children}</AppThemeProvider>
    </colorsContext.Provider>
  )
}

export default ({ element }) => <Provider>{element}</Provider>
