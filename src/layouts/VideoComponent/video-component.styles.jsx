import { css } from "@emotion/react"
import styled from "@emotion/styled"
import LazyVideo from "../../components/lazy-video/lazy-video.component"

export const Section = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  &.withBorderRadius {
    border-radius: 0.5rem;
    overflow: hidden;
  }

  &.fullWidth {
    width: 100vw;
  }

  &.fullWidthCS {
    width: 100vw;
    padding-left: 1rem;
    padding-right: 1rem;

    ${({ theme }) => theme.breakpoints.up("md")} {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  ${({ maxWidth }) => (maxWidth ? `max-width: ${maxWidth}px;` : ``)};

  ${({ paddingpercentage }) =>
    paddingpercentage
      ? css`
          padding-top: ${paddingpercentage}%;
          position: relative;
          video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `
      : css``}
  iframe {
    width: 100%;
  }

  &.transparent {
    background-color: transparent;
  }
`

export const Video = styled(LazyVideo)`
  width: 100%;
  height: 100%;
  display: flex;
  //overflow: hidden;
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

export const Subtitle = styled.div`
  h3 {
    font-family: ${({ theme }) => theme.fonts.primary};
    text-align: center;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 800;
    line-height: 2rem;
    color: ${({ theme }) => theme.palette.primary.main};
    margin-bottom: 1.25rem;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.75rem;
    }
  }
`
