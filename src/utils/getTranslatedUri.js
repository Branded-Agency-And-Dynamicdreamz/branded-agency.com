export const getTranslatedUri = ({
  targetUri,
  currentLanguage,
  allPages,
}) => {
  const matchedPage = allPages.find(page => {
    if (page.uri === targetUri) {
      return true
    }

    return page.translations?.some(
      t => t.uri === targetUri
    )
  })

  if (!matchedPage) {
    return targetUri
  }

  // current page same language
  if (
    matchedPage.language.code === currentLanguage
  ) {
    return matchedPage.uri
  }

  // translation
  const translated =
    matchedPage.translations?.find(
      t => t.language.code === currentLanguage
    )

  return translated?.uri || matchedPage.uri
}