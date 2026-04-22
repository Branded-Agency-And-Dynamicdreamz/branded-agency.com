import styled from "@emotion/styled"
import { Grid, Stack } from "@mui/material"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import Typography from "@mui/material/Typography"
import LazyVideo from "../../components/lazy-video/lazy-video.component"

export const Wrapper = styled(SectionWrapper)``

export const Text = styled(Typography)``

export const ItemsWrapper = styled.div``

export const CustomGrid = styled(Grid)`
  &.reverse {
    flex-direction: row-reverse;
  }

  .videoItem {
    display: flex;
  }
`
export const Video = styled(LazyVideo)`
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

export const Title = styled.h2`
  font-size: 1.75rem;
  line-height: 1.1;
  color: white;
  font-weight: 700;
  text-align: center;

  &.left {
    text-align: left;

    ${({ theme }) => theme.breakpoints.down("md")} {
      text-align: center;
    }
  }

  margin: 3rem 0;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 2rem;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2.5rem;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 2.75rem;
  }
`

export const Description = styled.div`
  margin: auto;

  strong {
    font-weight: 900;
  }

  p {
    font-size: 1rem;
    line-height: 1.25;
    color: white;
    text-align: left;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.25rem;
    }
  }

  &.left {
    p {
      text-align: left;
    }
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.25rem;
    max-width: 900px;
  }
`

export const TextWrapper = styled(Stack)`
  padding: 1.5rem 0;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 2rem;
  }
`

export const ServicesWrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 2rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 5rem;
    padding-bottom: 0;
  }
`

export const Service = styled(Typography)`
  font-size: 1rem;
  line-height: 1.25;
  color: white;
  text-transform: uppercase;
  text-align: center;

  font-weight: bold;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.25rem;
  }
`
