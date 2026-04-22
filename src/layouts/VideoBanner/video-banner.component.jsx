import React from "react"
import * as S from "./video-banner.styles"
import { getMediaUrl } from "../../utils/media-url"

const VideoBanner = ({
  iframeVideo,
  vimeoLink,
  sectionId,
  video,
  autoplay,
  controls,
}) => {
  const videoSrc = vimeoLink || getMediaUrl(video)

  if (!videoSrc && !iframeVideo) return null

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
          src={videoSrc}
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
