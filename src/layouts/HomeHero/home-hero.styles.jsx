import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { Link } from "react-scroll"
import CustomLink from "../../components/custom-link/custom-link.component"
import LazyVideo from "../../components/lazy-video/lazy-video.component"

export const Wrapper = styled(SectionWrapper)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
  max-height: calc(var(--viewport-height, 100vh));

  height: calc(var(--viewport-height, 100vh)) !important;

  &.playVideo {
    padding-top: 64px;
  }

  ${({ theme }) => theme.breakpoints.down("lg")} {
    &.playVideo {
      height: unset !important;
    }
  }

  &.isHero {
    height: 100% !important;
    max-height: unset !important;
  }
`

export const Video = styled(LazyVideo)`
  width: 100%;
  height: 100%;
`

export const PlayButton = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.3rem;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    transition: all 0.3s ease-in;

    transform: scale(1.05);
  }

  svg {
    width: 56px;
    height: 56px;
    margin: auto;

    ${({ theme }) => theme.breakpoints.up("md")} {
      width: 75px;
      height: 75px;
    }
  }
`

export const CustomContainer = styled(Container)`
  &.playVideo {
    display: none;
  }

  margin-top: auto;
`

export const Text = styled(Typography)`
  font-size: 1.25rem;
  text-align: center;
  color: white;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 300;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.375rem;
  }

  &.bookCall {
    font-size: 1.125rem;
    font-weight: 700;
  }
`

export const BookCall = styled(CustomLink)`
  position: relative;
  z-index: 5;
  display: none;
  gap: 1.5rem;
  align-items: center;

  ${({ theme }) => theme.breakpoints.up("md")} {
    display: flex;
  }

  transition: all 0.3s ease-in;

  &:hover {
    transition: all 0.3s ease-in;

    transform: scale(1.05);
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  text-align: left;
  position: relative;
  z-index: 3;
  max-width: 400px;
  line-height: 3.25rem;
  margin: 0 auto 0 0;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 2.75rem;
    max-width: 600px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 4.25rem;
    max-width: 900px;
    line-height: 5.25rem;
  }
`

export const TitleWrapper = styled.div`
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  position: relative;
  z-index: 10;
`

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem 0 3rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 2.5rem 0;
  }
`

export const VideoBg = styled.video`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  min-height: 100%;
  min-width: 100%;
  height: 100%;
  width: 100%;
  z-index: 1;
  object-fit: cover;

  &.playVideo {
    visibility: hidden;
  }
`

export const VideoFluid = styled.div`
  position: absolute;
  top: 0;
  width: 100%;

  &.playVideo {
    position: relative;
    top: 0;
    vertical-align: top;
    width: 100%;
    height: 100%;
  }
`

export const VideoWrapper = styled.div`
  visibility: hidden;
  ${({ theme }) => theme.breakpoints.down("lg")} {
    position: relative;
    padding-top: 56.25%;
  }

  &.playVideo {
    visibility: visible;
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`

export const CloseWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 16px;
  z-index: 50;
  color: white;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    top: 0;
    right: 50px;
  }

  svg {
    width: 35px;
    height: 35px;
  }

  cursor: pointer;
  visibility: hidden;

  &.playVideo {
    visibility: visible;
  }
`

export const NextSection = styled.span`
  position: absolute;
  z-index: 3;
  bottom: 10px;
  right: 50%;
  transform: translateX(50%);
  cursor: pointer;

  ${({ theme }) => theme.breakpoints.up("md")} {
    bottom: 25px;
  }

  svg {
    color: white;
    font-size: 2rem;
  }
`
