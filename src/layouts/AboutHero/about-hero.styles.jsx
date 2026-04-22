import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import { Typography } from "@mui/material"

export const Wrapper = styled(SectionWrapper)`
  padding-top: 2.25rem;
  display: flex;
  min-height: 496px;
  align-items: flex-start;

  ${({ theme }) => theme.breakpoints.up("md")} {
    height: calc(var(--viewport-height, 100vh)) !important;
    padding-top: 4.5rem;
    max-height: calc(var(--viewport-height, 100vh));
  }
`

export const Image = styled(CustomImage)`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  img {
    object-position: left !important  ;
    height: 120%;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    img {
      object-position: 25% 10% !important;
      height: 100%;
    }
  }
`

export const Content = styled.div`
  position: relative;
  z-index: 2;
`

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.light};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 2.75rem;
  font-style: normal;
  font-weight: 800;
  line-height: 100%;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  margin-bottom: 1.25rem;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 4.75rem;
    line-height: 95%;
  }
`

export const Subtitle = styled.div`
  p {
    color: ${({ theme }) => theme.palette.text.light};
    /* Figma: Desktop/H2 Mulish Extrabold 40px */
    font-size: ${({ theme }) => theme.typography.pxToRem(22)};
    font-style: normal;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: 0;
    text-align: left;
    margin-bottom: 1rem;

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }

    ${({ theme }) => theme.breakpoints.up("sm")} {
      font-size: ${({ theme }) => theme.typography.pxToRem(32)};
      margin-bottom: 1.25rem;
    }

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: ${({ theme }) => theme.typography.pxToRem(40)};
      margin-bottom: 1.5rem;
    }
  }
`

export const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
