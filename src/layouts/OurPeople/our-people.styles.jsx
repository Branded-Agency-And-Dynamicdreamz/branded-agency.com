import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import CustomButton from "../../components/custom-button/custom-button.component"
import { Typography, Grid } from "@mui/material"

export const Wrapper = styled(SectionWrapper)`
  position: relative;
  background-color: #fff;
  padding: 3.25rem 0 0;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 8.5rem;
    padding-bottom: 7.5rem;
  }
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
`

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.25;
  margin-bottom: 1.5rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.625rem;
    margin-bottom: 1.63rem;
  }
`

export const Description = styled.div`
  color: ${({ theme }) => theme.palette.primary.main};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 125%;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(22)};
  }

  p {
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
    color: ${({ theme }) => theme.palette.text.primary};
  }
`

export const Button = styled(CustomButton)`
  border-radius: 0;
  align-self: flex-start;
  margin-top: 2rem;
`

export const BottomImageWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: none;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-top: 3rem;
    display: block;
  }
`

export const BottomImage = styled(CustomImage)`
  width: 100%;
  height: auto;

  img {
    width: 100%;
    object-position: top;
  }
`

export const MosaicGrid = styled(Grid)`
  width: 100%;

  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
  }
`

export const MosaicImageWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 100%;
`

export const MosaicImage = styled(CustomImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${({ zIndex }) => zIndex || 1};
  transition: opacity 300ms ease-in-out;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  &.visible {
    opacity: 1;
    z-index: 2;
  }

  &.hidden {
    opacity: 0;
    z-index: 1;
    pointer-events: none;
  }

  img {
    object-position: 100% 20%;
    width: 100%;
    height: 100%;
    display: block;
  }
`

export const TestButton = styled.button`
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: white;
  border: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
`
