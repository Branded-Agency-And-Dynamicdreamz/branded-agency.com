import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import CustomButton from "../../components/custom-button/custom-button.component"
import Typography from "@mui/material/Typography"
import { Grid } from "@mui/material"

export const Wrapper = styled(SectionWrapper)`
  padding: ${({ theme }) => theme.typography.pxToRem(75)} 0;
  background-color: ${({ theme }) => theme.palette.primary.main};

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: ${({ theme }) => theme.typography.pxToRem(147)} 0;
  }

  .MuiContainer-root {
    max-width: 800px;
  }
`

export const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const Logo = styled(CustomImage)`
  width: 100%;
  max-width: 202px;
`

export const Text = styled(Typography)`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: white;
  text-align: center;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 2rem;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 3rem;
  }
`

export const Button = styled(CustomButton)`
  align-self: center;
  svg {
    width: 48px;
    height: 48px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.up("md")} {
    justify-content: flex-start;
  }
`

export const CustomGrid = styled(Grid)`
  margin-top: ${({ theme }) => theme.typography.pxToRem(32)};

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-top: ${({ theme }) => theme.typography.pxToRem(56)};
  }
`
