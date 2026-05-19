import React from "react"
import { Link as GatsbyLink } from "gatsby"
import translations from "../../generated/translations.json"

const getCurrentLanguage = () => {
  if (typeof window === "undefined") {
    return "EN"
  }

  const pathname = window.location.pathname

  if (
    pathname === "/es/" ||
    pathname.startsWith("/es/")
  ) {
    return "ES"
  }

  return "EN"
}

const normalizePath = path => {
  if (!path || typeof path !== "string") {
    return "/"
  }

  if (path === "/") {
    return "/"
  }

  return path.endsWith("/")
    ? path
    : `${path}/`
}

// Add this mapping for case study paths
const getLocalizedCaseStudyPath = (path, currentLanguage) => {
  // Check if this is a case study path
  const caseStudyMatch = path.match(/\/case-study\/([^/]+)\/?/)
  
  if (caseStudyMatch) {
    const slug = caseStudyMatch[1]
    if (currentLanguage === "ES") {
      return `/es/casestudies/${slug}/`
    }
    return `/case-study/${slug}/`
  }
  
  return null
}

export const getLocalizedPath = to => {
  if (!to || typeof to !== "string") {
    return to
  }

  const currentLanguage = getCurrentLanguage()
  const normalizedTo = normalizePath(to)

  // Handle home page
  if (normalizedTo === "/") {
    return currentLanguage === "ES" ? "/es/" : "/"
  }

  // Handle case study paths first
  const caseStudyPath = getLocalizedCaseStudyPath(normalizedTo, currentLanguage)
  if (caseStudyPath) {
    return caseStudyPath
  }

  // Handle paths that already have language prefix
  if (
    currentLanguage === "ES" &&
    normalizedTo.startsWith("/es/")
  ) {
    if (
      normalizedTo.includes(
        "/home-page/"
      )
    ) {
      return "/es/"
    }
    return normalizedTo
  }

  if (
    currentLanguage === "EN" &&
    !normalizedTo.startsWith("/es/")
  ) {
    if (
      normalizedTo.includes(
        "/home-page/"
      )
    ) {
      return "/"
    }
    return normalizedTo
  }

  // Try to find translation from translations.json
  const matchedKey = Object.keys(
    translations
  ).find(key => {
    const values = Object.values(
      translations[key]
    ).map(normalizePath)

    return values.includes(
      normalizedTo
    )
  })

  if (matchedKey) {
    let translatedPath =
      translations[matchedKey][
        currentLanguage
      ] || normalizedTo

    translatedPath =
      normalizePath(
        translatedPath
      )

    if (
      translatedPath.includes(
        "/home-page/"
      )
    ) {
      return currentLanguage === "ES"
        ? "/es/"
        : "/"
    }

    return translatedPath
  }

  return normalizedTo
}

const LocalizedLink = ({
  to,
  children,
  ...props
}) => {
  const localizedTo =
    getLocalizedPath(to)

  return (
    <GatsbyLink
      {...props}
      to={localizedTo}
    >
      {children}
    </GatsbyLink>
  )
}

export default LocalizedLink