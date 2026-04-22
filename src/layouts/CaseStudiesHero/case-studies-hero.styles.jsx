import styled from "@emotion/styled"
import { IconButton, Typography } from "@mui/material"
import CustomLink from "../../components/custom-link/custom-link.component"
import { keyframes } from "@emotion/css"

export const Section = styled.section``

const FadeOut = keyframes`
  0% { opacity: 1 }
  100% { opacity: 0 }
`

export const LabelWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 8rem;
  transform: translateX(-50%);
  z-index: 9;
`

export const Label = styled.div`
  position: relative;
  color: white;
  font-size: 1rem;
  padding: 0.3rem 0.4rem 0.4rem 0.4rem;
  background: ${({ theme }) => theme.palette.primary.main};
  text-align: center;
  border-radius: 1rem;
`

export const CaseStudyLink = styled(CustomLink)`
  display: flex;
  > div {
    width: 100%;
  }

  &:hover {
    .overlay {
      opacity: 1;
      transition: all 0.3s ease-in;
    }
  }

  position: relative;
`

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SliderWrapper = styled.div`
  position: relative;
  padding: 4rem 3.5rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 5rem 4rem;
  }
`

export const Author = styled(Typography)`
  font-size: 1.75rem;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.palette.tertiary.main};
  line-height: 1.1;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 2.25rem;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2.75rem;
  }
`

export const Title = styled(Typography)`
  font-size: 1rem;
  line-height: 1.25;
  font-style: italic;
  margin-bottom: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.palette.tertiary.main};

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.25rem;
    margin-bottom: 1.25rem;
  }
`

export const Comment = styled(Typography)`
  font-size: 1rem;
  line-height: 1.25;
  text-align: center;
  max-width: 700px;
  color: ${({ theme }) => theme.palette.text.light};

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.25rem;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  inset: 0;
`

export const ArrowBtn = styled(IconButton)`
  svg {
    color: ${({ theme }) => theme.palette.text.light};
    width: 36px;
    height: 36px;
    ${({ theme }) => theme.breakpoints.up("md")} {
      width: 56px;
      height: 56px;
    }
  }
  &.next-case-study {
    transform: rotate(180deg);
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(21, 25, 186, 0.8);
  z-index: 8;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease-in;
  padding: 1rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 3rem;
  }
`

export const CaseStudyTitle = styled(Typography)`
  color: white;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 3.5rem;
    line-height: 4rem;
  }
`

export const CaseStudySubtitle = styled(Typography)`
  color: white;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 2.5rem;
    line-height: 3rem;
  }
`
