import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import LazyVideo from "../../components/lazy-video/lazy-video.component"

export const Wrapper = styled.section`
  width: 100vw;
  padding: 0 1rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 0 1.5rem;
  }

  &.noPaddings {
    padding: 0;
  }
`

export const Image = styled(CustomImage)`
  width: 100%;
  height: 100%;
  display: flex;

  &.gif {
    img {
      object-fit: cover !important;
    }
  }
`
export const VideoWrapper = styled.div`
  display: flex;
`

export const Video = styled(LazyVideo)`
  width: 100%;
  height: 100%;

  object-fit: cover !important;
`
