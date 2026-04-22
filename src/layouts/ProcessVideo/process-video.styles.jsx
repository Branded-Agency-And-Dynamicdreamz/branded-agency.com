import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Typography } from "@mui/material"

export const Wrapper = styled(SectionWrapper)`
  position: relative;
  background-color: #1a1a52;
  padding: 2.5rem 0;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
`

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
`

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Title = styled(Typography)`
  color: white;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.625rem;
  font-weight: 800;
  line-height: 1.25;
  margin-bottom: 1.75rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2.25rem;
    margin-bottom: 2.5rem;
  }
`

export const VideoWrapper = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-bottom: 2rem;
  }
`

export const Description = styled.div`
  color: white;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1rem;
  }

  p {
    color: white;
    font-weight: 300;
    margin: 0;

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

export const Content = styled.div`
  color: white;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 2rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.125rem;
    margin-bottom: 2.5rem;
  }

  p {
    color: white;
    font-weight: 300;
    margin: 0;

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

export const Link = styled.a`
  color: #00d4ff;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  font-weight: 800;
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.125rem;
  }
`
