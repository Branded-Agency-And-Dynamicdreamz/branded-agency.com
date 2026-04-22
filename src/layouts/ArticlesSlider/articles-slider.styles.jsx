import styled from "@emotion/styled"
import Typography from "@mui/material/Typography"
import CustomImage from "../../components/custom-image/custom-image.component"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomLink from "../../components/custom-link/custom-link.component"

export const Wrapper = styled(SectionWrapper)`
  width: 100vw;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.primary.main};
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 3rem 0;
  }

  &.white {
    background-color: white;
    padding: 0 0 1.5rem;
    &.hasTitle {
      padding: 2rem 0 1.5rem;

      ${({ theme }) => theme.breakpoints.up("md")} {
        padding: 5rem 0 1.5rem;
      }
    }
  }
`

export const SwiperWrapper = styled.div`
  .swiper {
    overflow: visible;
  }

  .swiper-wrapper {
    transition-timing-function: linear !important;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Arrows = styled.div`
  display: flex;
  gap: 2rem;

  &.desktop {
    display: none;

    ${({ theme }) => theme.breakpoints.up("md")} {
      display: flex;
      margin-bottom: 2.75rem;
      margin-left: auto;
      align-items: center;
    }
  }

  &.mobile {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;

    ${({ theme }) => theme.breakpoints.up("md")} {
      display: none;
    }
  }
`

export const ArrowButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  .isWhite & {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

export const Title = styled(Typography)`
  color: white;
  font-style: normal;
  font-weight: 800;
  line-height: 110%;
  font-size: 1.75rem !important;
  margin-bottom: 2rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2.5rem !important;
    margin-bottom: 2.75rem;
  }

  &.isWhite {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  max-width: 525px;
`

export const Image = styled(CustomImage)``

export const Link = styled(CustomLink)`
  display: block;
  position: relative;
`

export const CardArticle = styled.article`
  position: relative;
  width: 100%;
  overflow: hidden;

  &:hover {
    .overlay {
      transition: top 0.3s ease;
      top: 0;
    }
  }
`

export const CardImage = styled(CustomImage)``

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  width: 101%;
  height: 100%;
  opacity: 0.9;
  background: #1519ba;
  z-index: 8;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  top: 100%;
  transition: top 0.3s ease;
`

export const TextContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CardTitle = styled(Typography)`
  color: white;
  font-size: 1rem;
  font-style: normal;
  font-weight: 800;
  line-height: 125%;
  text-align: left;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.625rem;
  }
`

export const CardDescription = styled(Typography)`
  color: white;
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: 125%;
  text-align: left;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.625rem;
  }
`
