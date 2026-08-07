import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import { Container } from "@mui/material"

export const Wrapper = styled(SectionWrapper)`
  &.fullHeight {
    height: calc(
      var(--viewport-height, 100vh) - ${({ theme }) => theme.navHeight}px
    );
  }
  overflow: hidden;
  position: relative;

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 2rem 0;
  }
`

export const CustomContainer = styled(Container)`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NextSection = styled.span`
  position: absolute;
  z-index: 3;
  bottom: 25px;
  right: 50%;
  transform: translateX(50%);
  cursor: pointer;

  svg {
    color: white;
    font-size: 2rem;
  }
`

export const TextWrapper = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 9;
`

export const Title = styled.h1`
  font-size: 2rem;
  line-height: 1;
  text-transform: uppercase;
  color: white;
  text-align: center;
  position: relative;
  z-index: 4;

  ${({ theme }) => theme.breakpoints.up(700)} {
    font-size: 2.75rem;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 3.25rem;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    font-size: 4.5rem;
  }
`

export const Text = styled.div`
  position: relative;
  z-index: 4;

  p {
    font-size: 1rem;
    line-height: 1.25;
    color: white;
    text-align: center;
    max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "1300px")};
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    p {
      font-size: 1.25rem;
    }
  }
`

export const Image = styled(CustomImage)`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  height: 100%;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover !important;
  }
`
