import styled from "@emotion/styled"
import { IconButton, Typography } from "@mui/material"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Section = styled(SectionWrapper)`
  max-height: 925px;
  height: var(--viewport-height, 100vh);
  background-color: ${({ theme }) => theme.palette.primary.main};
`

export const TopWrapper = styled.section`
  padding: 2rem 0 4.25rem 0;
  background-color: #1519ba;
  position: relative;

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
`

export const Title = styled(Typography)`
  color: #fff;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  max-width: 1156px;
  margin: 2.25rem auto 0;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 3rem;
    margin: 4.25rem auto 0;
  }
`

export const ContentWrapper = styled.section`
  &.noPaddingBottom {
    padding-bottom: 0 !important;
  }
  background-color: ${({ theme }) => theme.palette.text.light};
  padding-top: 3rem;
  padding-bottom: 3rem;
  > .MuiContainer-root {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    ${({ theme }) => theme.breakpoints.up("md")} {
      gap: 2.5rem;
    }

    > div:first-of-type {
      h1,
      h2,
      h3,
      h4,
      p {
        &:first-of-type {
          margin-top: 0;
        }
      }
    }
  }
  color: ${({ theme }) => theme.palette.text.content};
  line-height: 1.25;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 5rem;
  }
  a {
    color: #6649c3;
    :hover {
      color: #f0a5b6;
    }
  }
  h1,
  h2,
  h3,
  h4 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    &.title {
      margin-top: 3rem;
    }
    &.subtitle {
      margin-top: 1.5rem;
    }
  }
  h1,
  h2 {
    font-size: 1.5rem;
    line-height: 1.1;
    font-weight: 700;
    margin: 3rem 0;
    ${({ theme }) => theme.breakpoints.up("sm")} {
      font-size: 2rem;
    }
    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 2.5rem;
    }
  }
  h3 {
    font-size: 1.25rem;
    line-height: 1.1;
    font-weight: 700;
    margin-top: 2.5rem;
    ${({ theme }) => theme.breakpoints.up("sm")} {
      font-size: 1.75rem;
    }
    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.95rem;
    }
  }
  h4 {
    font-size: 1.125rem;
    line-height: 1.1;
    font-weight: 700;
    ${({ theme }) => theme.breakpoints.up("sm")} {
      font-size: 1.5rem;
    }
  }
  .posts-author {
    font-size: 0.875rem;
    line-height: 1.15;
    ${({ theme }) => theme.breakpoints.up("sm")} {
      font-size: 1rem;
    }
    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.125rem;
    }
    ${({ theme }) => theme.breakpoints.up("lg")} {
      font-size: 1.25rem;
    }
  }
`

export const InsightTitle = styled(Typography)`
  font-size: 1.5rem;
  line-height: 1.25;
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 700;
  margin-bottom: 0.5rem !important;
  margin-top: 0 !important;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 2rem;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2.5rem;
  }
`

export const Date = styled(Typography)`
  font-size: 0.875rem;
  line-height: 1.25;
  color: white;
  margin-bottom: 1rem;
`

export const InfoWrapper = styled.div`
  margin-bottom: 1.25rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-bottom: 2.75rem;
  }
`

export const Info = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  text-align: center;
  font-style: normal;
  font-weight: 300 !important;
  font-size: 1rem;
  line-height: 1.25rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.375rem;
    line-height: 1.71rem;
  }
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
  align-items: flex-start;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    justify-content: flex-start;
  }

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

export const ShareLabel = styled(Typography)`
  color: #000029;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    display: none;
  }
  margin-right: 1rem;
  opacity: 0.6;
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

export const AuthorCard = styled.div`
  border-radius: 0.5rem;
  background: #f4f3f0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    padding: 2rem 2.5rem;
    flex-direction: row;
    justify-content: space-between;
    gap: 1.5rem;
  }

  margin-top: 3.75rem;
`

export const LeftWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem 1.5rem;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    padding: 0;
  }
`

export const AuthorImg = styled(CustomImage)`
  border-radius: 100%;
  clip-path: circle(45%) content-box;
  width: 64px;
  height: 64px;
`

export const AuthorInfo = styled.div``

export const Name = styled(Typography)`
  color: #000029;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2rem;
`

export const Job = styled(Typography)`
  color: #000029;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  opacity: 0.6;
`

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 1.5rem 0;
    justify-content: center;
    background-color: white;
    width: 100%;
  }
`
