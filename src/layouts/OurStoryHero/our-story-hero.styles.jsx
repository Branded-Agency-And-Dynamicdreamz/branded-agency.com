import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import LazyVideo from "../../components/lazy-video/lazy-video.component"
import Typography from "@mui/material/Typography"

export const Wrapper = styled(SectionWrapper)`
  h1,
  h2,
  h3,
  p {
    color: white;
  }
  padding: 3rem 0;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 5rem 0;
  }
`

export const TitleWrapper = styled.div`
  margin-bottom: 2rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-bottom: 3rem;
  }
`

export const Title = styled(Typography)`
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 2.25rem;
  text-align: center;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 3.25rem;
  }
`

export const Description = styled(Typography)`
  p {
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.5rem;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.5rem;
      line-height: 1.75rem;
    }
  }

  strong {
    font-weight: 800;
  }
`

export const Content = styled.div`
  strong {
    font-weight: 800;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.25rem;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.25rem;
      line-height: 1.5rem;
    }
  }
`

export const Video = styled(LazyVideo)`
  width: 100%;
  height: 100%;

  margin: 1.5rem 0;
`
