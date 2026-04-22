import styled from "@emotion/styled"
import { AppBar } from "@mui/material"
import LogoSVG from "../../assets/branded-logo.svg"
import Container from "@mui/material/Container"
import CustomLink from "../custom-link/custom-link.component"
import LoginSVG from "../../assets/login.svg"

export const CustomAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  z-index: 9999;
  min-height: 72px;
  justify-content: center;
  transition: 0.3s background-color ease;

  &.light {
    transition: 0.3s background-color ease;

    background-color: ${({ theme }) => theme.palette.secondary.light};
  }

  &.transparent {
    transition: 0.3s background-color ease;

    background-color: transparent;
  }

  &.activeMenu {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }

  &.semiTransparent {
    background: transparent;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.whiteHeader {
    background-color: white;
  }
`

export const BgHeader = styled.div`
  height: 72px;
  width: 100%;
  background: rgba(21, 25, 186, 0.9);
  backdrop-filter: blur(4.5px);

  &.whiteHeader {
    background: rgba(255, 255, 255);
  }
`

export const CustomContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .search {
    cursor: pointer;
  }

  &.absolute {
    position: absolute;
  }
`

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;

  ${({ theme }) => theme.breakpoints.up(980)} {
    gap: 4rem;
  }
`

export const Link = styled(CustomLink)`
  display: flex;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    padding: 1.3604rem 0;
  }
`

export const LeftWrapper = styled.div`
  display: flex;
`

export const Logo = styled(LogoSVG)`
  width: 176px;
  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 190px;
  }

  &.whiteHeader {
    path,
    polygon,
    rect {
      fill: ${({ theme }) => theme.palette.primary.main};
    }
  }

  &.addPadding {
    ${({ theme }) => theme.breakpoints.up("lg")} {
      padding: 1.25rem 0;
    }
  }
`

export const ItemsWrapper = styled.div`
  display: none;
  flex-direction: row;
  gap: 4rem;
  align-items: center;
  ${({ theme }) => theme.breakpoints.up("lg")} {
    gap: 5.625rem;
  }

  ${({ theme }) => theme.breakpoints.up(980)} {
    display: flex;
  }
`

export const SearchWrapper = styled.div`


  width: 24px;
${({ theme }) => theme.breakpoints.up(980)} {
    display: none;
  }
  
`

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;

  &.whiteHeader {
    svg {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }

  ${({ theme }) => theme.breakpoints.up(980)} {
    display: none;
  }
`

export const LoginLogo = styled(LoginSVG)``

export const LoginLink = styled(CustomLink)`
  display: flex;
  align-items: center;
  padding: 1.3604rem 0;

  ${({ theme }) => theme.breakpoints.up(980)} {
    padding: 0;
  }

  &.whiteHeader {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`
