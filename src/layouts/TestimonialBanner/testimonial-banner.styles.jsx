import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import { Typography, IconButton } from "@mui/material"

export const Wrapper = styled(SectionWrapper)`
  position: relative;
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: 2.5rem 0;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Title = styled(Typography)`
  color: white;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.625rem;
  font-weight: 800;
  line-height: 1.25;
  margin-bottom: 1.75rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
  }
`

export const Content = styled.div`
  color: white;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.5;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.5rem;
    max-width: 600px;
    margin-bottom: 2.5rem;
  }

  p {
    color: white;
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
    color: white;
  }
`

export const SwiperWrapper = styled.div`
  width: 100%;
  position: relative;
`

export const ArrowsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`

export const ArrowButton = styled(IconButton)`
  color: white;
  padding: 0;
  min-width: auto;
  width: 28px;
  height: 28px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
    background-color: transparent;
  }

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`

export const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    min-height: 800px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    min-height: 500px;
  }
`

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`

export const Image = styled(CustomImage)`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`

export const TestimonialContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  min-height: 400px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 2rem;
    min-height: 500px;
  }
`

export const Testimonial = styled.div`
  color: ${({ theme }) => theme.palette.primary.main};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.25;
  text-align: left;
  margin-bottom: 1.5rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.85rem;
    margin-bottom: 2rem;
  }

  p {
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 300;
    margin: 0;
    text-align: left;

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`

export const AuthorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  text-align: left;
`

export const Author = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.5rem;
  }
`

export const Occupation = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  font-weight: 300;
  line-height: 1;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.125rem;
  }
`
