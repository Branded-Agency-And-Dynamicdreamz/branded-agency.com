import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import { Grid } from "@mui/material"
import CustomButton from "../../components/custom-button/custom-button.component"
import Typography from "@mui/material/Typography"

export const Wrapper = styled(SectionWrapper)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: 3.75rem 0;
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 5rem 0;
  }
`

export const Title = styled.h2`
  font-size: 1.75rem;
  line-height: 3.25rem;
  color: white;
  text-align: center;
  font-weight: 700;
  margin-bottom: 1.5rem;

  ${({ theme }) => theme.breakpoints.up(750)} {
    font-size: 2.5rem;
    margin-bottom: 4rem;
  }
  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 2.75rem;
  }
`

export const LogosWrapper = styled.div`
  display: inline-flex;
`

export const Logo = styled(CustomImage)`
  width: 100%;
  height: 100%;
  margin: auto;

  img {
    object-fit: contain !important;
  }
`

export const CustomGrid = styled(Grid)`
  .first {
    ${({ theme }) => theme.breakpoints.down("md")} {
      order: 2;
    }
  }

  .second {
    ${({ theme }) => theme.breakpoints.down("md")} {
      order: 1;
    }
  }

  .paragraph {
    color: ${({ theme }) => theme.palette.text.light};
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 300;
    line-height: 125%;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.625rem;
    }

    &.large {
      font-size: 1.625rem;
      ${({ theme }) => theme.breakpoints.up("md")} {
        font-size: 2.5rem;
      }
    }
  }
`

export const SwiperWrapper = styled.div`
  padding-bottom: 2.5rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-bottom: 5rem;
  }

  pointer-events: none;

  .swiper-wrapper {
    transition-timing-function: linear !important;
  }

  .swiper-slide {
    margin: auto;
  }
  .swiper {
    height: 100%;
    overflow: visible;
  }
`

export const Button = styled(CustomButton)`
  border-radius: 0;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.typography.pxToRem(22)};
  padding: 1rem 3rem;

  span {
    font-weight: 800;
  }
`

export const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.light};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 300;
  line-height: 125%;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.625rem;
  }
`
