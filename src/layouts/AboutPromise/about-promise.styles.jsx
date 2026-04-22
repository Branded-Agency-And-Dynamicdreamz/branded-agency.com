import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import CustomButton from "../../components/custom-button/custom-button.component"
import { Typography } from "@mui/material"

export const Wrapper = styled(SectionWrapper)`
  position: relative;
  background-color: #1519ba;
  padding: 3.75rem 0 2.5rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    min-height: 810px;
    padding-top: 13rem;
    padding-bottom: 9.14rem;
  }
`

export const BgImage = styled(CustomImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
`

export const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.up("md")} {
    max-width: 690px;
  }
`

export const Title = styled(Typography)`
  color: white;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.25;
  margin-bottom: 2rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.625rem;
    margin-bottom: 2.25rem;
  }
`

export const Description = styled.div`
  color: white;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.25;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.625rem;
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

export const Button = styled(CustomButton)`
  border-radius: 0;
  align-self: flex-start;
  margin-top: 2rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-top: 5.54rem;
  }
`

export const ImageWrapper = styled.div`
  z-index: 1;
  width: 100%;
  position: relative;
  margin-top: 2rem;
  padding: 0 1rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 0;
    position: absolute;
    top: 50%;
    right: 1.5rem;
    transform: translateY(-50%);
    max-width: 433px;
    margin-top: 0;
  }
`

export const Image = styled(CustomImage)`
  width: 100%;
  height: 100%;

  &.mobile {
    display: block;

    ${({ theme }) => theme.breakpoints.up("md")} {
      display: none;
    }
  }

  &.desktop {
    display: none;

    ${({ theme }) => theme.breakpoints.up("md")} {
      display: block;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover !important;
    object-position: center;
  }
`

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding-top: 1rem;
  z-index: 10;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-bottom: 1rem;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const Arrow = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 28px;
  height: 28px;

  svg {
    color: white;
    font-size: 1.75rem;
  }
`

export const SlideCounter = styled.span`
  color: white;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.25;
  text-align: center;
`
