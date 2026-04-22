import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"

export const Wrapper = styled(SectionWrapper)`
  position: relative;
  padding: 0;
  display: flex;
`

export const Video = styled.video`
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* object-fit: cover; */
`

export const IframeWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100% !important;
  }
`

export const VideoWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 5;

  &.isIframeVideo {
    padding-bottom: 56.25%;
    iframe {
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      position: absolute;
    }
  }
`
