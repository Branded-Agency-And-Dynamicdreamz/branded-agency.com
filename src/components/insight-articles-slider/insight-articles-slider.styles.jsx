import styled from "@emotion/styled"
import { IconButton } from "@mui/material"
import SectionWrapper from "../section-wrapper/section-wrapper.component"
import Typography from "@mui/material/Typography"

export const SectionHero = styled(SectionWrapper)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding-top: 3.44rem;
  padding-bottom: 3.44rem;
  position: relative;
`

export const TextWrapper = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 9;
  margin-bottom: 1.5rem;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    margin-bottom: 2.5rem;
  }
`
export const Title = styled(Typography)`
  position: relative;
  z-index: 5;
  font-size: 2rem;
  color: ${({ theme }) => theme.palette.text.light};
  font-weight: 700;
  text-align: center;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 3.25rem;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 4.5rem;
  }
  font-family: ${({ theme }) => theme.fonts.secondary};
`

export const ArrowsWrapper = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  width: 100%;
  display: none;
  justify-content: space-between;
  max-width: 1200px;
  transform: translate(-50%, -50%);
  padding: 0 1.5rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    display: flex;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    top: 32%;
  }

  z-index: 10;
  pointer-events: none;
`

export const Arrow = styled(IconButton)`
  pointer-events: auto;

  &.prev {
    svg {
      transform: rotate(180deg);
    }
  }

  &.swiper-button-disabled {
    svg {
      circle {
        stroke: rgba(189, 189, 189, 0.8);
      }

      path {
        stroke: rgba(189, 189, 189, 0.8);
      }
    }
  }
`

export const ContentSwiper = styled.div`
  position: relative;
`

export const SliderIndicator = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.125rem;
  justify-content: center;
  margin-top: 2rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    display: none;
  }
`

export const Indicator = styled.div`
  width: 14px;
  height: 4px;
  background-color: white;
  opacity: 0.3;
  transition: all 0.3s ease;

  &.active {
    width: 32px;
    opacity: 1;
    transition: all 0.3s ease;
  }
`

export const BgCircle = styled.div`
  width: 1497px;
  height: 1497px;
  flex-shrink: 0;
  border-radius: 1497px;
  opacity: 0.68;
  background: #d865ea;
  filter: blur(374.5px);
  position: absolute;
  right: -30%;
  bottom: -50%;
`
