import styled from "@emotion/styled"
import CustomImage from "../custom-image/custom-image.component"
import { Typography } from "@mui/material"
import IconButton from "@mui/material/IconButton"

export const TopWrapper = styled.section`
  padding: 2rem 0 2.25rem 0;
  background-color: #1519ba;
  position: relative;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 5rem 0 5rem 0;
  }

  .MuiContainer-root {
    position: relative;
    z-index: 8;
  }

  overflow: hidden;
  z-index: 5;
`

export const BgCircle = styled.div`
  width: 1497px;
  height: 1497px;
  flex-shrink: 0;
  border-radius: 1497px;
  opacity: 0.68;
  background: #d865ea;
  filter: blur(374.5px);
  position: absolute;
  right: -30%;
  top: 75%;
`

export const Video = styled.video`
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* object-fit: cover; */
`

export const IframeWrapper = styled.div`
  position: relative;
  padding-bottom: 45.25%;

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding-bottom: 56.25%;
  }
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

export const Image = styled(CustomImage)`
  width: 100%;
  height: 100%;
  img {
    border-radius: 0.25rem;
  }
  border-radius: 0.25rem;

  &.containHeroImage {
    img {
      object-fit: contain !important;
      border-radius: 0.25rem;
    }
  }
`

export const Gif = styled(CustomImage)`
  border-radius: 0.25em;
  border: 0;
  display: inline-block;
  position: relative;
  width: 100%;
  height: 50%;

  overflow: hidden;

  img {
    display: block;
    object-fit: cover !important;
    width: 100%;
    height: 100%;
  }
`

export const VideoWrapper = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
`

export const Title = styled(Typography)`
  color: #fff;
  text-align: left;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  max-width: 1156px;
  margin: 2.25rem auto 0;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 3rem;
    margin: 3.25rem auto 0;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  font-size: 12px;
  color: white;
  justify-content: center;
  margin-top: 1.25rem;
`
export const Info = styled(Typography)`
  opacity: 0.75;
  color: white;
  text-align: center;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const Tag = styled(Typography)`
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.palette.text.light};
  background-color: #4483f6;
  font-weight: 700;
  padding: 0.4rem 0.6rem;
  line-height: 1.15;
  margin-bottom: 2rem;
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 2.5rem;

  &.card {
    margin-top: 0;

    .link {
      border-color: rgba(92, 59, 205, 1);
      svg {
        color: rgba(92, 59, 205, 1);
        path,
        rect {
          fill: rgba(92, 59, 205, 1);
        }
      }
    }
  }
`

export const SocialButton = styled(IconButton)`
  width: 48px;
  height: 48px;

  border-radius: 100%;
  border: 1px solid white;

  .linkedin {
    width: 24px;
    height: 24px;
  }

  svg {
    width: 20px;
    height: 20px;
    color: white;
  }
`
