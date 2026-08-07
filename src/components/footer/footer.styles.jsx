import styled from "@emotion/styled"
import CustomLink from "../custom-link/custom-link.component"
import LogoSVG from "../../assets/branded-logo.svg"
import LogoLinkedin from "../../assets/linkedin.svg"
import LogoLoginSVG from "../../assets/login.svg"
import Typography from "@mui/material/Typography"
import { Link } from "react-scroll"
import { Grid } from "@mui/material"
import { CustomButton } from "../custom-button/custom-button.styles"
import BCorpLogoSVG from "../../assets/b-corp.svg"
import HubspotLogoSVG from "../../assets/hubspot-logo.svg"

export const Wrapper = styled.footer`
  color: white;
  padding: 2.25rem 0 4.5rem;
  background: linear-gradient(257deg, #4630b0 0%, #092da9 59.09%);
  border-top: 0.14rem solid rgba(255, 255, 255, 0.23);
  z-index: 1;
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 2rem 0;
  }
  z-index: 50;

  &.whiteFooter {
    color: ${({ theme }) => theme.palette.primary.main};
    background: white;
    border-top: 0.14rem solid rgba(21, 25, 186, 0.23);
  }
`

export const BackTop = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  align-items: center;
  width: 90px;
  margin: 1.5rem 0 1.5rem auto;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin: 0.25rem auto 3.5rem;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    display: none;
  }
  position: relative;

  font-size: ${({ theme }) => theme.typography.pxToRem(14)};

  svg {
    position: absolute;
    font-size: 2rem;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const LinkHome = styled(CustomLink)`
  display: flex;
  &.logo {
    margin-bottom: 2.25rem;

    ${({ theme }) => theme.breakpoints.up("md")} {
      margin-bottom: 5rem;
    }

    svg {
      path {
        fill: white;
      }
    }
  }

  &.links {
    font-size: 0.875rem;
    text-decoration-line: underline;
    font-weight: 300;
  }

  &.whiteFooter .logo svg path {
    fill: ${({ theme }) => theme.palette.primary.main};
  }

  &.whiteFooter .links {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

export const Button = styled(CustomButton)`
  border-radius: 0;
  font-size: 1.375rem;
  padding: 0.85rem 1.5rem;
  line-height: 1.5;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 800 !important;

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 15px 18px;
    font-size: 1rem;
  }

  .whiteFooter & {
    background-color: ${({ theme }) => theme.palette.primary.main} !important;
    color: white !important;
    border: none !important;
  }
`

export const ButtonsWrapper = styled.div`
  // display: flex;
  // flex-direction: row;
  // gap: 17px;
  // align-items: center;
  // font-family: ${({ theme }) => theme.fonts.secondary};
  // //font-size: 17px;
  // font-weight: 700;
  // span {
  //   opacity: 0.4;
  // }
  //
  // ${({ theme }) => theme.breakpoints.up("md")} {
  //   gap: 30px;
  // }
  //
  // ${({ theme }) => theme.breakpoints.down("md")} {
  //   justify-content: center;
  // }

  // ${({ theme }) => theme.breakpoints.up("md")} {
  //   max-width: 370px;
  // }
`
export const LinkButton = styled(CustomLink)`
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  box-shadow: inset 0 0 0 1px white;
  border-radius: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  position: relative;
  padding: 0.85rem 0.9rem;
  background-color: transparent;
  color: white;

  // ${({ theme }) => theme.breakpoints.up("md")} {
  //   min-width: 215px;
  // }

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }

  &.withLogo {
    padding: 0;
    justify-content: flex-start;

    ${({ theme }) => theme.breakpoints.up("sm")} {
      justify-content: center;
    }

    ${({ theme }) => theme.breakpoints.up("md")} {
      justify-content: flex-start;
    }
  }

  .whiteFooter & {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.palette.primary.main};
    background-color: white;
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

export const BookLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid rgba(255, 255, 255, 1);
  width: 100%;
  height: 100%;
  max-width: 52px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    max-width: 60px;
  }

  .whiteFooter & {
    border-left: 1px solid rgba(21, 25, 186);
  }
`

export const Text = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  font-weight: 800;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.375rem;
  }
  &.withLogo {
    width: 100%;
    text-align: center;
    padding: 0 0.5rem;
  }

  .whiteFooter & {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

export const Logo = styled(LogoSVG)`
  width: 175px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 170px;
  }

  path {
    fill: white;
  }

  &.whiteFooter {
    polygon,
    path,
    rect {
      fill: ${({ theme }) => theme.palette.primary.main} !important;
    }
  }
`

export const LogoWrapper = styled(Grid)``

export const BCorpItem = styled(Grid)`
  order: 3;

  ${({ theme }) => theme.breakpoints.up("lg")} {
    order: 0;
  }
`

export const ItemsWrapperGrid = styled(Grid)`
  order: 2;

  ${({ theme }) => theme.breakpoints.up("lg")} {
    order: 0;
  }
`

export const LogoLinkSVG = styled(LogoLinkedin)`
  width: 28px;
  height: 28px;
`

export const LogoLogin = styled(LogoLoginSVG)`
  width: 18px;
  height: 18px;
  position: absolute;
  right: -22px;
  top: 5px;
`

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-between;
  column-gap: 2.5rem;
  row-gap: 1rem;
`

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;

  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 0.25rem;
  }
`

export const Item = styled(CustomLink)`
  align-self: flex-start;
  color: white;
  position: relative;
  text-decoration: underline;

  font-size: 1.125rem;
  font-style: normal;
  font-weight: 300;
  line-height: 125%;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: 1px;
  text-underline-offset: auto;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.375rem;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  &.selected {
    color: ${({ theme }) => theme.palette.tertiary.light};
  }

  .whiteFooter & {
    color: ${({ theme }) => theme.palette.primary.main};

    &.selected {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`

export const Name = styled(Typography)`
  color: #fff;
  font-size: 1rem;
  font-weight: 800;
  line-height: 1.5rem;
  text-transform: capitalize;

  &.spacer {
    display: none;

    ${({ theme }) => theme.breakpoints.up("md")} {
      display: block;
    }
  }

  .whiteFooter & {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

export const Links = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  column-gap: 1.25rem;
`

export const Rights = styled(Typography)`
  color: #fff;
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  line-height: normal;
  opacity: 0.7;
  text-align: left;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(18)};
    text-align: right;
  }
`

export const BottomWrapper = styled.div`
  margin-top: 2rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-top: 5rem;
  }
`

export const FollowItem = styled(Grid)`
  display: flex;

  ${({ theme }) => theme.breakpoints.up("md")} {
    display: none;
  }
  ${({ theme }) => theme.breakpoints.up("lg")} {
    display: flex;
    justify-content: flex-end;
  }
`

export const CertifiedInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    flex-direction: row;
    align-items: center;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    gap: 2.25rem;
    justify-content: flex-start;
  }
`

export const CertifiedLogo = styled(BCorpLogoSVG)`
  min-width: 59px;
  min-height: 100px;
  max-width: 59px;
  max-height: 100px;

  path {
    fill: white;
  }

  &.whiteFooter {
    path {
      fill: ${({ theme }) => theme.palette.primary.main};
    }
  }
`

export const CertifiedDescription = styled.div`
  p:first-of-type {
    margin-top: 0;
  }

  p {
    font-weight: 300;
  }

  p:last-of-type {
    margin-bottom: 0;
  }

  a {
    color: white;
  }
  font-size: 1rem;
  line-height: 130%;

  ${({ theme }) => theme.breakpoints.up("md")} {
    //max-width: 400px;
    font-size: 1.25rem;
  }

  .whiteFooter & {
    p {
      color: ${({ theme }) => theme.palette.primary.main};
    }

    a {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`

// export const HubspotLogo = styled(CustomImage)`
//   width: 100%;
//   max-width: 35px;
// `

export const HubspotLogo = styled(HubspotLogoSVG)`
  width: 100%;
  max-width: 35px;

  path {
    fill: white;
  }

  &.whiteFooter {
    path {
      fill: ${({ theme }) => theme.palette.primary.main};
    }
  }
`
