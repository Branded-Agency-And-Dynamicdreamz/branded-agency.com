import React from "react"
import { Link as GatsbyLink } from "gatsby"

import translations from "../../generated/translations.json"

const getCurrentLanguage = () => {
  if (typeof window === "undefined") {
    return "EN"
  }

  const pathname = window.location.pathname

  // Direct language route detection
  if (
    pathname === "/es/" ||
    pathname.startsWith("/es/")
  ) {
    return "ES"
  }

  // Match translated routes
  const matchedLanguage = Object.values(
    translations
  ).find(item => {
    return Object.values(item).includes(pathname)
  })

  if (!matchedLanguage) {
    return "EN"
  }

  const lang = Object.keys(
    matchedLanguage
  ).find(key => {
    return matchedLanguage[key] === pathname
  })

  return lang || "EN"
}

const getLocalizedPath = to => {
  const currentLanguage =
    getCurrentLanguage()

  const matchedKey = Object.keys(
    translations
  ).find(key => {
    return Object.values(
      translations[key]
    ).includes(to)
  })

  if (!matchedKey) {
    return to
  }

  return (
    translations[matchedKey][
      currentLanguage
    ] || to
  )
}

const Link = ({ to, ...props }) => {
  return (
    <GatsbyLink
      to={getLocalizedPath(to)}
      {...props}
    />
  )
}

export default Link