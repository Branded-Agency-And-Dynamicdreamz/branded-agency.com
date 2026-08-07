import React from "react"
import * as S from "./insight-hero.styles"
import { Container } from "@mui/material"
import dayjs from "dayjs"
import ArticleHero from "../../components/article-hero/article-hero.component"


const InsightHero = ({
  title,
  date,
  tag,
  children,
  containerMaxWidth = "md",
  image,
  video,
  isHeroVideo = false,
  videoLink,
  videoType,
  authorInfo,
  noPaddingBottom = false,
  idHeroQuiz,
  slug,
  containHeroImage = false,
  videoControls,
}) => {
  const extraLink = authorInfo?.extraLink
  const linkedInLink = authorInfo?.linkedinLink
  const mail = authorInfo?.mail
  const dateFormatted = dayjs(date, "YYYY-MM-DDTHH:mm:ss").format(
    "MMMM D, YYYY",
  )
  return (
    <>
      <ArticleHero
        title={title}
        date={date}
        authorInfo={authorInfo}
        isHeroVideo={isHeroVideo}
        videoLink={videoLink}
        video={video}
        videoType={videoType}
        image={image}
        type="insight"
        slug={slug}
        idHeroQuiz={idHeroQuiz}
        containHeroImage={containHeroImage}
        videoControls={videoControls}
      />
      <S.ContentWrapper className={noPaddingBottom ? "noPaddingBottom" : ""}>
        <S.InfoWrapper>
          <S.Info>{dateFormatted}</S.Info>
          {/*{authorInfo?.name && (*/}
          {/*  <>*/}
          {/*    ■ <S.Info>By {authorInfo.name}</S.Info>*/}
          {/*  </>*/}
          {/*)}*/}
        </S.InfoWrapper>
        <Container maxWidth={containerMaxWidth}>
          {children}
          {/*{authorInfo?.image && authorInfo?.name && (*/}
          {/*  <AuthorCard*/}
          {/*    authorInfo={authorInfo}*/}
          {/*    extraLink={extraLink}*/}
          {/*    linkedInLink={linkedInLink}*/}
          {/*    mail={mail}*/}
          {/*    slug={slug}*/}
          {/*    type="insight"*/}
          {/*  />*/}
          {/*)}*/}
        </Container>
      </S.ContentWrapper>
    </>
  )
}

export default InsightHero
