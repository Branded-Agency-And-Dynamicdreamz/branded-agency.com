import React from "react"
import * as S from "./article-hero.styles"
import { Container } from "@mui/material"
import FavoriteIcon from "@mui/icons-material/Favorite"
import LinkedInSVG from "../../assets/linkedin.svg"
import EmailIcon from "@mui/icons-material/Email"
import dayjs from "dayjs"
import VideoComponent from "../../layouts/VideoComponent"
import TypeformEmbed from "../../layouts/TypeformEmbed"

const ArticleHero = ({
  isHeroVideo,
  isHeroIframe,
  videoLink,
  videoType,
  video,
  authorInfo,
  date,
  title,
  image,
  type,
  slug,
  idHeroQuiz,
  containHeroImage,
  videoControls,
}) => {
  const dateFormatted = dayjs(date, "YYYY-MM-DDTHH:mm:ss").format(
    "MMMM D, YYYY",
  )

  const extraLink = authorInfo?.extraLink
  const linkedInLink = authorInfo?.linkedinLink
  const mail = authorInfo?.mail

  const isHeroGif =
    video?.mediaItemUrl.substr(video?.mediaItemUrl.lastIndexOf(".") + 1) ===
    "gif"

  return (
    <S.TopWrapper>
      <Container>
        {!isHeroVideo ? (
          !isHeroGif ? (
            <>
              {idHeroQuiz ? (
                <TypeformEmbed idForm={idHeroQuiz} isHero />
              ) : (
                <S.Image
                  className={containHeroImage ? "containHeroImage" : ""}
                  arPaddingPercentage={50}
                  img={image}
                />
              )}
            </>
          ) : (
            <S.Gif arPaddingPercentage={50} img={video?.mediaItemUrl} />
          )
        ) : (
          <S.VideoWrapper>
            <VideoComponent
              video={video}
              vimeoLink={videoLink}
              autoplay
              controls={videoControls}
            />
            {/*{videoType === "link" ? (*/}
            {/*  <S.IframeWrapper>*/}
            {/*    <iframe*/}
            {/*      src={videoLink}*/}
            {/*      width="100%"*/}
            {/*      frameBorder={0}*/}
            {/*      style={{ maxHeight: "100%" }}*/}
            {/*    />*/}
            {/*  </S.IframeWrapper>*/}
            {/*) : (*/}
            {/*  <S.Video*/}
            {/*    autoPlay={true}*/}
            {/*    muted={true}*/}
            {/*    loop*/}
            {/*    playsInline={true}*/}
            {/*    controls={true}*/}
            {/*  >*/}
            {/*    <source src={video?.mediaItemUrl} type="video/mp4" />*/}
            {/*  </S.Video>*/}
            {/*)}*/}
          </S.VideoWrapper>
        )}
      </Container>
      <Container maxWidth="md">
        <S.Title variant="h1">{title}</S.Title>
        {/*<S.InfoWrapper>*/}
        {/*  <S.Info>{dateFormatted}</S.Info>*/}
        {/*  /!*{authorInfo?.name && (*!/*/}
        {/*  /!*  <>*!/*/}
        {/*  /!*    ■ <S.Info>By {authorInfo.name}</S.Info>*!/*/}
        {/*  /!*  </>*!/*/}
        {/*  /!*)}*!/*/}
        {/*</S.InfoWrapper>*/}
        {(linkedInLink || extraLink || mail) && (
          <S.SocialLinks>
            {/*{extraLink && (*/}
            {/*  <S.SocialButton href={extraLink} target="_blank">*/}
            {/*    <FavoriteIcon />*/}
            {/*  </S.SocialButton>*/}
            {/*)}*/}
            {linkedInLink && (
              <S.SocialButton
                href={`http://www.linkedin.com/shareArticle?mini=true&url=${
                  process.env.GATSBY_WEBSITE_URL + `/${type}/` + slug
                }`}
                target="_blank"
              >
                <LinkedInSVG className="linkedin" />
              </S.SocialButton>
            )}
            {mail && (
              <S.SocialButton href={`mailto:${mail}`}>
                <EmailIcon />
              </S.SocialButton>
            )}
          </S.SocialLinks>
        )}
      </Container>
      <S.BgCircle />
    </S.TopWrapper>
  )
}

export default ArticleHero
