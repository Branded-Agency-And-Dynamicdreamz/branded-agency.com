import styled from "@emotion/styled"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import { Typography } from "@mui/material"
import CustomButton from "../../components/custom-button/custom-button.component"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled(CustomBgImage)`
  height: 100dvh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4.5rem;
`

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Card = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  border-radius: 1rem;
  padding: 2.6rem 1rem;
  align-items: center;

  ${({ theme }) => theme.breakpoints.up("md")} {
    max-width: 730px;
    padding: 3rem 3.75rem;
  }
`

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-family: ${({ theme }) => theme.fonts.secondary};
  text-align: center;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 800;
  line-height: 2rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    max-width: 610px;
    font-size: 2.5rem;
    line-height: 3rem;
  }
`

export const Description = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.625rem;
  text-align: center;
  max-width: 250px;
  margin: 0 auto;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.75rem;
    line-height: 2.25rem;
  }
`

export const Button = styled(CustomButton)`
  border-radius: 0.5rem;
  padding: 1.25rem 1.5rem;
  margin: 0 auto;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 800 !important;

  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 240px;
    padding: 0.75rem 0.25rem;
  }
`

export const BrandedLogo = styled(CustomImage)`
  width: 44px;
  height: 44px;
`
