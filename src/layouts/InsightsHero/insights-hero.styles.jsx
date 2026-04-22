import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { IconButton, Tab, Typography } from "@mui/material"
import CustomImage from "../../components/custom-image/custom-image.component"
import CustomLink from "../../components/custom-link/custom-link.component"

export const SectionHero = styled(SectionWrapper)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding-top: 3.44rem;
  padding-bottom: 3.44rem;
  position: relative;
`

export const Section = styled(SectionWrapper)`
  //> .MuiContainer-root {
  //  display: flex;
  //  align-items: center;
  //  justify-content: center;
  //  flex-direction: column;
  //}
  background-color: white;

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`

export const ArrowsWrapper = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  width: 100%;
  display: none;
  justify-content: space-between;
  max-width: 1200px;
  transform: translateX(-50%);
  padding: 0 1.5rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    display: flex;
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

export const ContentSwiper = styled.div``

export const Title = styled(Typography)`
  position: relative;
  z-index: 5;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.palette.text.light};
  font-weight: 700;
  text-align: center;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 3.25rem;
    margin-bottom: 2.5rem;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 4.5rem;
  }
  font-family: ${({ theme }) => theme.fonts.secondary};
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

export const Subtitle = styled(Typography)`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
  max-width: 920px;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.light};
  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.75rem;
    line-height: 2.5rem;
  }
`

export const Description = styled.div`
  color: ${({ theme }) => theme.palette.text.light};
  max-width: 920px;
  text-align: center;
  margin-bottom: 4rem;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    margin-bottom: 5rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`

export const ImageWrapper = styled(CustomLink)`
  display: flex;
`

export const InsightImage = styled(CustomImage)`
  width: 100%;
  ${({ theme }) => theme.breakpoints.down("lg")} {
    padding-top: 120%;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding-top: 60%;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding-top: 100%;
  }
`

export const TextWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 3rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 0 3rem;
  }
`

export const InsightTitle = styled(Typography)`
  font-size: 1.75rem;
  line-height: 1.1;
  margin-bottom: 1rem;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.light};
  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 2rem;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    text-align: left;
  }
  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 2.75rem;
  }
`

export const InsightDescription = styled.div`
  color: ${({ theme }) => theme.palette.text.light};
  text-align: center;
  line-height: 1.25;
  ${({ theme }) => theme.breakpoints.up("md")} {
    text-align: left;
    font-size: 1.25rem;
  }
`

export const StyledLink = styled(CustomLink)`
  color: ${({ theme }) => theme.palette.text.light};
  text-decoration: underline;
  margin-top: 1rem;
  text-align: center;
  ${({ theme }) => theme.breakpoints.up("md")} {
    text-align: left;
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

export const HeaderWrapper = styled.div`
  .MuiTabs-indicator {
    height: 100%;
    border-radius: 2.3125rem;
    border: 1px solid var(--Brand-blue, #1519ba);
    background: transparent;
    pointer-events: none;
  }

  .MuiTabs-flexContainer {
    ${({ theme }) => theme.breakpoints.up("md")} {
      justify-content: center;
    }
  }
`

export const PanelsWrapper = styled.div`
  margin-top: 3.75rem;
`

export const CustomTab = styled(Tab)`
  font-weight: 600;
  text-transform: capitalize;
  color: #939393;
  font-size: 1.1875rem;
  padding: 0.875rem 1.5rem;
`
