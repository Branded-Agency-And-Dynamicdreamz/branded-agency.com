import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import { Typography } from "@mui/material"

export const Wrapper = styled(SectionWrapper)`
  position: relative;
  padding: 3.5rem 0;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 6.875rem;
    padding-bottom: 6.875rem;
  }
`

export const BgImage = styled(CustomImage)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  pointer-events: none;
  img {
    object-fit: cover !important;
  }
`

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
`

export const LogoWrapper = styled.div`
  display: none;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  ${({ theme }) => theme.breakpoints.up("md")} {
    display: flex;
    padding-right: 2rem;
    align-items: flex-start;
    justify-content: flex-start;
  }
`

export const Logo = styled(CustomImage)`
  width: 100%;
  max-width: 80px;
  height: auto;
  object-fit: contain;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    max-width: 120px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    max-width: 194px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 100%;
  color: white;

  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 2.25rem;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    justify-content: flex-start;
  }
`

export const MobileLogo = styled(CustomImage)`
  display: block;
  width: auto;
  max-width: 80px;
  height: auto;
  object-fit: contain;
  flex-shrink: 0;

  ${({ theme }) => theme.breakpoints.up("md")} {
    display: none;
  }
`

export const Title = styled(Typography)`
  color: white;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.75rem;
  font-weight: 800;
  line-height: 110%;
  margin: 0;
  max-width: 205px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2.5rem;
    max-width: unset;
  }
`

export const Description = styled.div`
  color: white;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 125%;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.625rem;
    line-height: 1.25;
  }

  p {
    color: white;
    font-weight: 300;

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
