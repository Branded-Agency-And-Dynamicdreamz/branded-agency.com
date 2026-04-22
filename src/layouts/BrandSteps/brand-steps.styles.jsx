import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import Typography from "@mui/material/Typography"
import CustomButton from "../../components/custom-button/custom-button.component"
import { Grid, Stack } from "@mui/material"

export const Wrapper = styled(SectionWrapper)`
  padding: 0 0 3rem;
  position: relative;
  z-index: 5;

  .MuiContainer-root {
    ${({ theme }) => theme.breakpoints.down("lg")} {
      padding: 0;
    }
  }
`

export const Image = styled(CustomImage)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TextWrapper = styled(Stack)`
  padding: 3.75rem 1rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 3.5rem;
  }
`

export const Title = styled.h2`
  font-size: 2.25rem;
  line-height: 3.25rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: white;
  font-weight: 700;
  text-align: center;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2.75rem;
    text-align: left;
    line-height: normal;
  }
`

export const Description = styled(Typography)`
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: white;
  text-align: left;
  opacity: 0.8;

  ${({ theme }) => theme.breakpoints.down("md")} {
    line-height: 1.5rem;
  }
`

export const Button = styled(CustomButton)`
  align-self: center;

  ${({ theme }) => theme.breakpoints.up("md")} {
    align-self: flex-start;
  }
`

export const CustomGrid = styled(Grid)`
  &.reverse {
    flex-direction: row-reverse;
  }
`
