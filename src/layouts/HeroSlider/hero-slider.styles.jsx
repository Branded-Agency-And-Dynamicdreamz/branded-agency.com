import styled from "@emotion/styled"
import Typography from "@mui/material/Typography"
import { Link } from "react-scroll"
import { Stack } from "@mui/material"
import CustomImage from "../../components/custom-image/custom-image.component"
import Container from "@mui/material/Container"

export const Wrapper = styled.section`
  height: calc(
    var(--viewport-height, 100vh) - ${({ theme }) => theme.navHeight}px
  );
  position: relative;
  margin-bottom: 5rem;
`

export const ContentWrapper = styled(Stack)`
  position: relative;
  z-index: 5;
  padding: 0 1.5rem;
  height: 100%;
`

export const Title = styled.h1`
  line-height: 1;
  text-transform: uppercase;
  color: white;
  text-align: center;
  max-width: 900px;
  margin: auto;
  position: relative;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 2.75rem;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 3.25rem;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 4.5rem;
  }
`

export const TextBold = styled.h3`
  font-size: 1.125rem;

  font-weight: 800;
  color: white;
  line-height: 1.2;
  text-align: center;
  max-width: 900px;
  margin: auto;
  position: relative;

  ${({ theme }) => theme.breakpoints.up(700)} {
    font-size: 1.75rem;
  }
  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 1.95rem;
  }
`

export const Description = styled(Typography)`
  font-size: 1rem;
  line-height: 1.25;
  color: white;
  text-align: center;
  max-width: 900px;
  margin: auto;
  position: relative;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.25rem;
  }
`

export const ButtonLink = styled(Link)`
  cursor: pointer;
  text-align: center;
  padding: 1.09rem 1.5rem 1rem;
  font-size: 1.125rem;
  font-weight: 700 !important;
  border-radius: 2.25rem;
  line-height: normal;
  text-transform: unset;
  font-family: ${({ theme }) => theme.fonts.secondary};
  vertical-align: center;
  transition: 0.2s ease-in-out all;
  &:hover {
    transition: 0.2s ease-in-out all;
    transform: scale(1.05);
    span {
      line-height: normal;
    }
  }

  .MuiTouchRipple-root {
    display: none;
  }

  span {
    position: relative;
    line-height: normal;
    display: flex;
    align-self: center;
    width: 100%;
    justify-content: center;
    height: 100%;
  }

  // ${({ theme }) => theme.breakpoints.up("md")} {
  //   padding: 0.75rem 1.5rem;
  //   font-size: 1.5rem;
  //   line-height: 1.15;
  // }

  box-shadow: inset 0 0 0 1px white;

  background-color: white;
  color: ${({ theme }) => theme.palette.primary.main};
  backface-visibility: hidden;

  &:hover {
    backface-visibility: hidden;

    transform: scale(1.05);
  }
`

export const SwiperWrapper = styled.div`
  .swiper {
    overflow: visible;
    height: 100%;
  }
  padding: 3rem 0;
  height: 100%;
`

export const Image = styled(CustomImage)`
  position: absolute;
  right: 0;
  bottom: -100px;
  transition: all 0.3s ease;
  z-index: 2;
`

export const CustomContainer = styled(Container)`
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -85%);
  z-index: 8;
  pointer-events: none;
`

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: auto;
  svg {
    width: 75px;
    height: 75px;
    color: white;
  }
  cursor: pointer;

  &.prev1 {
    left: 0;
  }

  &.next1 {
    right: 0;
  }

  z-index: 5;
`
