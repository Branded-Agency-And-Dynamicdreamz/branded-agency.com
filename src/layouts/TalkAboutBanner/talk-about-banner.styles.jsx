import styled from "@emotion/styled"
import CustomImage from "../../components/custom-image/custom-image.component"
import { Typography } from "@mui/material"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import CustomLink from "../../components/custom-link/custom-link.component"

export const Wrapper = styled(CustomBgImage)`
  height: 100dvh;
  padding: 2rem 0;

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 2.5rem 0;
  }

  .MuiContainer-root {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

export const Card = styled.div`
  padding: 2.5rem 1.8rem 1.75rem;
  position: relative;
  max-width: 303px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    max-width: 528px;
    padding: 3.25rem;
  }
`

export const Title = styled(Typography)`
  color: white;
  text-align: center;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.secondary};
  line-height: 2.0625rem;
  z-index: 2;
  position: relative;
`

export const Description = styled.div`
  p {
    margin-bottom: 0;
    color: white;
    text-align: center;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.625rem;
    z-index: 2;
    position: relative;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }

  strong {
    font-weight: 800;
  }
`

export const SecondDescription = styled.div`
  p {
    color: white;
    text-align: center;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 200;
    line-height: 1.25rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  margin-bottom: 1.25rem;

  a {
    color: white !important;
    text-decoration: none;
  }

  strong {
    font-weight: 800;
  }
`

export const Logo = styled(CustomImage)`
  width: 100%;
  height: 12px;
  position: absolute;
  top: 0px;

  img {
    object-fit: contain !important;
  }
`

export const BottomDescription = styled.div`
  p,
  a {
    text-decoration: none;
    color: white;
    text-align: center;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 200;
    line-height: 1.25rem;
    margin: 0;
  }
`

export const CardBg = styled(CustomImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  img {
    object-fit: fill !important;
  }
`

export const IconWrapper = styled(CustomLink)`
  svg {
    font-size: 40px;
    color: white;
  }
`

export const Icon = styled(CustomImage)`
  width: 90px;
  height: 90px;
`

export const InfoWrapper = styled.div`
  margin-top: 1rem;
  p {
    color: white;
    text-align: center;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 200;
    line-height: 1.25rem;
    margin-top: 0;
  }

  strong {
    font-weight: 800;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${({ theme }) => theme.breakpoints.up("md")} {
    max-width: 372px;
  }
`

export const Link = styled(CustomLink)`
  color: white;
  border-radius: 50px;
  padding: 0.25rem;
  width: 95px;
  text-align: center;
  border: 1px solid white;
  font-weight: 700;
  font-size: 15px;
`

export const VicepresidentWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  padding-bottom: 2.75rem;
  padding-top: 3rem;
`
