import React from "react"
import * as S from "./video-banner.styles"
import ReactPlayer from "react-player"

const VideoBanner = ({
  iframeVideo,
  vimeoLink,
  sectionId,
  video,
  autoplay,
  controls,
}) => {
  if (!vimeoLink && !video && !iframeVideo) return null

  return (
    <S.Wrapper id={sectionId}>
      {iframeVideo ? (
        <S.IframeWrapper>
          <iframe
            src={iframeVideo}
            width="100%"
            frameBorder={0}
            style={{ maxHeight: "100%" }}
          />
        </S.IframeWrapper>
      ) : (
        <S.Video
          src={vimeoLink ?? video?.mediaItemUrl}
          autoPlay={autoplay}
          muted={autoplay}
          loop
          playsInline={autoplay}
          controls={controls}
        />
      )}
    </S.Wrapper>
  )
}

export default VideoBanner
