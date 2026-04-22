import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { IconButton } from "@mui/material"
import CustomImage from "../../components/custom-image/custom-image.component"
import Container from "@mui/material/Container"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
  display: flex;
`

export const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .swiper {
    height: 100%;
  }
`

export const ButtonsWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: absolute;
  width: 100%;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 0;
  }
`

export const ArrowBtn = styled(IconButton)`
  pointer-events: auto;
  svg {
    color: ${({ theme }) => theme.palette.text.light};
    width: 75px !important;
    height: 75px !important;
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));

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
  height: 100%;
`
