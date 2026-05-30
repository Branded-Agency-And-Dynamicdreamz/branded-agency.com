import React from "react"
import * as S from "./video-component.styles"
import Container from "@mui/material/Container"
import parse from "html-react-parser"
import FadeInOnScroll from "../../components/fade-in-on-scroll/fade-in-on-scroll.component"
import { getMediaUrl } from "../../utils/media-url"

const VideoComponent = ({
  video,
  autoplay,
  controls,
  iframeVideo,
  vimeoLink,
  arPaddingPercentage,
  isTransparent,
  subtitle,
  maxWidth,
  fullWidth,
  threshold,
  withBorderRadius = false,
  pauseOnClick = false,
  loop = true,
  fieldGroupName,
  showAnimation,
  thumbnail,
  ...props
}) => {
  const isCaseStudy = fieldGroupName?.split("_")[0] === "CaseStudy"
  const videoSrc = vimeoLink || getMediaUrl(video)
  const thumbnailSrc = getMediaUrl(thumbnail) || thumbnail

  if (!iframeVideo && !videoSrc) {
    return null
  }

  return (
    <FadeInOnScroll showAnimation={showAnimation}>
      <S.Section
        {...props}
        maxWidth={maxWidth}
        className={`${isTransparent ? "transparent" : ""} ${
          fullWidth ? "fullWidth" : ""
        } ${withBorderRadius ? "withBorderRadius" : ""}
        
    ${fullWidth && isCaseStudy ? "fullWidthCS" : ""}`}
        paddingpercentage={arPaddingPercentage}
      >
        {isTransparent ? (
          <Container>
            <>
              {subtitle && <S.Subtitle>{parse(subtitle)}</S.Subtitle>}

              {iframeVideo ? (
                <S.IframeWrapper>
                  <iframe
                    src={iframeVideo}
                    width="100%"
                    frameBorder={0}
                    style={{ maxHeight: "100%" }}
                    loading="lazy"
                  />
                </S.IframeWrapper>
              ) : (
                <S.Video
                  src={videoSrc}
                  autoPlay={autoplay}
                  muted={autoplay}
                  loop={loop}
                  playsInline={autoplay}
                  controls={controls}
                  threshold={threshold}
                  pauseOnClick={pauseOnClick}
                  thumbnail={thumbnailSrc}
                  preload="metadata"
                  poster={thumbnailSrc}
                  fetchpriority="low"
                />
              )}
            </>
          </Container>
        ) : (
          <>
            {subtitle && <S.Subtitle>{parse(subtitle)}</S.Subtitle>}

            {iframeVideo ? (
              <S.IframeWrapper>
                <iframe
                  src={iframeVideo}
                  width="100%"
                  frameBorder={0}
                  style={{ maxHeight: "100%" }}
                  loading="lazy"
                />
              </S.IframeWrapper>
            ) : (
              <S.Video
                src={videoSrc}
                autoPlay={autoplay}
                muted={autoplay}
                loop={loop}
                threshold={threshold}
                playsInline={autoplay}
                controls={controls}
                pauseOnClick={pauseOnClick}
                thumbnail={thumbnailSrc}
                preload="metadata"
                poster={thumbnailSrc}
                fetchpriority="low"
              />
            )}
          </>
        )}
      </S.Section>
    </FadeInOnScroll>
  )
}

export default React.memo(VideoComponent)