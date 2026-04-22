import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import LazyVideo from "../../components/lazy-video/lazy-video.component"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled(SectionWrapper)`
  &.isLight {
    background-color: white;
    h2,
    h3,
    p {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: white;

  padding: 3rem 0;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 5rem 0;
  }
`

export const Content = styled.div`
  h2 {
    font-weight: 800;
    font-size: 2rem;
    line-height: 2.25rem;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 3rem;
      line-height: 3.25rem;
    }
  }

  h3 {
    font-weight: 900;
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-family: ${({ theme }) => theme.fonts.primary};

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.25rem;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.25rem;
      line-height: 1.5rem;
    }

    strong {
      font-weight: 800;
    }
  }
`

export const Video = styled(LazyVideo)`
  width: 100%;
  height: 100%;
  margin: 1.5rem 0;
`

export const Image = styled(CustomImage)`
  width: 100%;
  height: 100%;
  margin: 2rem 0;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin: 3rem 0 2rem;
  }
`
