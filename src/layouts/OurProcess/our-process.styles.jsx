import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import { Typography } from "@mui/material"

export const Wrapper = styled(SectionWrapper)`
  position: relative;
  background-color: #1519ba;
  padding: 5.3rem 0;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 6.875rem;
    padding-bottom: 6.875rem;
  }
`

export const BgImage = styled(CustomImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  mix-blend-mode: overlay;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${({ theme }) => theme.breakpoints.up("md")} {
    align-items: center;
  }
`

export const Title = styled(Typography)`
  color: white;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.625rem;
  font-weight: 800;
  line-height: 1.25;
  margin-bottom: 1.5rem;
  text-align: left;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.625rem;
    margin-bottom: 2rem;
    text-align: center;
  }
`

export const VideoContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 1.75rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-bottom: 2rem;
  }
`

export const ThumbnailWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
  z-index: 2;
  opacity: 1;
  transition: opacity 300ms ease-in-out;

  &.fading {
    opacity: 0;
    pointer-events: none;
  }
`

export const ThumbnailImage = styled(CustomImage)`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  cursor: pointer;
  transition: all 0.3s ease-in;
  pointer-events: auto;

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    transition: all 0.3s ease-in;
  }

  svg {
    width: 64px;
    height: 64px;

    ${({ theme }) => theme.breakpoints.up("md")} {
      width: 80px;
      height: 80px;
    }
  }
`

export const PlayerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  z-index: 1;

  .react-player {
    position: relative;
    width: 100%;
    height: 100%;
  }
`

export const Description = styled.div`
  color: white;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.5;
  text-align: left;
  max-width: 100%;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.625rem;
    line-height: 1.25;
  }

  p {
    color: white;
    font-weight: 300;
    margin: 0;
    text-align: left;

    ${({ theme }) => theme.breakpoints.up("md")} {
      text-align: center;
    }

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  strong,
  b {
    font-weight: 800;
    color: white;
  }
`
