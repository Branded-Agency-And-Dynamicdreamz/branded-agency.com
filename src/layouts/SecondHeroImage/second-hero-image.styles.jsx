import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import { Link } from "react-scroll"
import { Grid } from "@mui/material"

export const Wrapper = styled(SectionWrapper)`
  padding: 2rem 0;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 5rem 0;
  }
  .MuiContainer-root {
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    ${({ theme }) => theme.breakpoints.up("md")} {
      align-items: center;
      justify-content: flex-end;
    }
  }

  height: calc(var(--viewport-height, 100vh) - 68px);
  max-height: 900px;
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

  &.desktop {
    display: none;
    ${({ theme }) => theme.breakpoints.up("md")} {
      display: flex;
    }
  }

  &.mobile {
    display: flex;

    ${({ theme }) => theme.breakpoints.up("md")} {
      display: none;
    }
  }

  &.playVideo {
    visibility: hidden;
  }
`

export const CustomGrid = styled(Grid)`
  height: 100%;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    .img {
      order: 2;
    }

    .text {
      order: 1;
    }
  }
`

export const Image = styled(CustomImage)`
  display: flex;

  img {
    max-height: 400px;
    height: 100%;
    width: 100%;
  }

  position: relative;
  right: -20px;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    right: 0;

    img {
      max-height: 900px;
    }
  }
`

export const TextWrapperAnimation = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 9;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;
  z-index: 7;
  width: 100%;
  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 45%;
    height: auto;
  }
  justify-content: space-between;
  height: 100%;
`

export const Title = styled.div`
  h1 {
    font-size: 2rem;
    line-height: 1;
    text-transform: uppercase;
    text-align: center;
    color: white;
    position: relative;
    z-index: 4;

    ${({ theme }) => theme.breakpoints.up("md")} {
      text-align: left;
      font-size: 2.75rem;
    }

    ${({ theme }) => theme.breakpoints.up("lg")} {
      font-size: 3.25rem;
    }

    ${({ theme }) => theme.breakpoints.up("xl")} {
      font-size: 4.5rem;
    }
  }
`

export const Button = styled(Link)`
  cursor: pointer;
  position: relative;
  align-self: center;

  padding: 0.6rem 1.3rem;
  font-size: 1.35rem;
  font-weight: 700 !important;
  border-radius: 1.65rem;
  line-height: 1.15;
  text-transform: unset;

  ${({ theme }) => theme.breakpoints.up("md")} {
    align-self: flex-start;
    padding: 0.75rem 1.5rem;
    font-size: 1.5rem;
  }

  border: 0.165rem solid white;

  background-color: white;
  color: ${({ theme }) => theme.palette.primary.main};

  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.main};
    color: white;
  }
`
