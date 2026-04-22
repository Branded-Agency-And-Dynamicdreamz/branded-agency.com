import styled from "@emotion/styled"
import { IconButton } from "@mui/material"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled.div`
  width: 100%;
  //margin: 2rem 0;
  position: relative;

  ${({ theme }) => theme.breakpoints.up("lg")} {
    //margin: 3rem 0;
  }

  &.addPadding {
    padding: 0 1rem;

    ${({ theme }) => theme.breakpoints.up("md")} {
      padding: 0 1.5rem;
    }
  }

  &.caseStudy {
    margin: 0;
  }

  &.fullWidth {
    width: 100vw;
  }
`

export const SliderWrapper = styled.div`
  //max-width: 725px;
  width: 100%;
  position: relative;
  &.isContinuousMove {
    .swiper-wrapper {
      transition-timing-function: linear !important;
    }
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  z-index: 2;

  ${({ theme }) => theme.breakpoints.up(1350)} {
    width: 120%;
  }
`

export const ArrowBtn = styled(IconButton)`
  svg {
    color: ${({ theme }) => theme.palette.primary.main};
    width: 36px;
    height: 36px;
    ${({ theme }) => theme.breakpoints.up("md")} {
      width: 56px;
      height: 56px;
    }
  }
  &.next-image {
    transform: rotate(180deg);
  }
`

export const Image = styled(CustomImage)`
  &.maxHeight {
    img {
      max-height: 640px;
      object-fit: contain !important;
    }
  }
  //max-height: 640px;
`

export const Caption = styled.div`
  margin: 1rem 0 0;

  p {
    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
    b {
      font-weight: 800;
    }
    strong {
      font-weight: 800;
    }
  }
  p {
    margin: 1rem 0;
    text-align: justify;
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 1rem;
    font-style: normal;
    font-weight: 300 !important;
    line-height: 1.5rem;
    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  }
`
