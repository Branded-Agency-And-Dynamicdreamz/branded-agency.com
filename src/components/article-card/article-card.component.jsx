import React from "react"
import * as S from "./article-card.styles.jsx"
import parse from "html-react-parser"
import dayjs from "dayjs"
import PlayCircleIcon from "@mui/icons-material/PlayCircle"
import { useMediaQuery, useTheme } from "@mui/material"
import CustomLink from "../custom-link/custom-link.component"

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
}) => {
  const dateFormatted = dayjs(date, "YYYY-MM-DDTHH:mm:ss").format(
    "MMMM D, YYYY",
  )
  const image = featuredImage?.node

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.down("md"))
  if (!image) return null

  const tag = type === "insight" ? insightBuilder?.tag : caseStudyBuilder?.tag
  const authorInfo =
    type === "insight"
      ? insightBuilder?.authorInfo
      : caseStudyBuilder?.authorInfo

  if (isSlider) {
    return (
      <S.Wrapper>
        <S.Link url={`/${type}/${slug}`}>
          <S.Img
            arPaddingPercentage={!isMd ? 40 : 60}
            img={image}
            className="isSlider"
          />
        </S.Link>
        {tag && <S.Tag>{tag}</S.Tag>}
        <S.Title>{title}</S.Title>
        {content && <S.Description>{parse(content)}</S.Description>}
        <S.ReadMore url={`/${type}/${slug}`}>Read more</S.ReadMore>
      </S.Wrapper>
    )
  }

  return (
    <S.LinkWrapper
      url={`/${type}/${slug}`}
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
  )
}

export default ArticleCard
