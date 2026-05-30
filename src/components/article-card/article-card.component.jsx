import React from "react"
import * as S from "./article-card.styles.jsx"
import parse from "html-react-parser"
import dayjs from "dayjs"
import PlayCircleIcon from "@mui/icons-material/PlayCircle"
import { useMediaQuery, useTheme } from "@mui/material"
import { navigate } from "gatsby-link"
import { getLocalizedPath } from "../LocalizedLink"

const ArticleCard = ({
  slug,
  title,
  content,
  featuredImage,
  caseStudyBuilder,
  insightBuilder,
  isSlider = false,
  isRelatedInsights = false,
  date,
  type,
  language,
  translations,
  uri,
}) => {
  const dateFormatted = dayjs(date, "YYYY-MM-DDTHH:mm:ss").format(
    "MMMM D, YYYY",
  )
  const image = featuredImage?.node

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.down("md"))
  if (!image) return null

  const tag = type === "insight" ? insightBuilder?.tag : caseStudyBuilder?.tag

  const getCurrentLanguage = () => {
    if (typeof window === "undefined") return "EN"
    const pathname = window.location.pathname
    if (pathname === "/es/" || pathname.startsWith("/es/")) return "ES"
    return "EN"
  }

  const currentLanguage = getCurrentLanguage()

  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    let finalUri = null

    if (uri && language?.code === currentLanguage) {
      finalUri = uri
    }
    else if (translations && translations.length > 0) {
      const translationForCurrentLanguage = translations.find(t => t.language?.code === currentLanguage)
      if (translationForCurrentLanguage?.uri) {
        finalUri = translationForCurrentLanguage.uri
      }
      else {
        const englishTranslation = translations.find(t => t.language?.code === "EN")
        if (englishTranslation?.uri) {
          finalUri = englishTranslation.uri
        } else if (uri) {
          finalUri = uri
        } else {
          if (currentLanguage === "ES") {
            finalUri = `/es/insight/${slug}/`
          } else {
            finalUri = `/insight/${slug}/`
          }
        }
      }
    }
    else if (uri) {
      finalUri = uri
        }
    else {
      if (currentLanguage === "ES") {
        finalUri = `/es/insight/${slug}/`
      } else {
        finalUri = `/insight/${slug}/`
      }
    }
    
    const localizedPath = getLocalizedPath(finalUri)
    navigate(localizedPath)
  }

  if (isSlider) {
    return (
      <div onClick={handleClick} style={{ cursor: "pointer", width: "100%", height: "100%" }}>
        <S.Wrapper>
          <S.Img
            arPaddingPercentage={!isMd ? 40 : 60}
            img={image}
            className="isSlider"
          />
          {tag && <S.Tag>{tag}</S.Tag>}
          <S.Title>{title}</S.Title>
          {content && <S.Description>{parse(content)}</S.Description>}
          <S.ReadMore>Read more</S.ReadMore>
        </S.Wrapper>
      </div>
    )
  }

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      <S.LinkWrapper
        className={isRelatedInsights ? "isRelatedInsights" : ""}
      >
        <S.ImageWrapper>
          <S.Img arPaddingPercentage={60} img={image} />
          {tag === "Video" && <PlayCircleIcon />}
        </S.ImageWrapper>
        {tag && !isRelatedInsights && (
          <S.Tag className={!isSlider && "tabStyle"}>{tag}</S.Tag>
        )}
        <S.Title className="tabStyle">{title}</S.Title>
        <S.InfoWrapper>
          <S.Info>{dateFormatted}</S.Info>
        </S.InfoWrapper>
      </S.LinkWrapper>
    </div>
  )
}

export default ArticleCard