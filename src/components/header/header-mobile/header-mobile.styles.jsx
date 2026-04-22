import styled from "@emotion/styled"
import CustomLink from "../../custom-link/custom-link.component"
import Typography from "@mui/material/Typography"
import CustomImage from "../../custom-image/custom-image.component"
import LoginSVG from "../../../assets/login.svg"

export const Wrapper = styled.div`
  overflow-x: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //background-image: linear-gradient(160deg, #1519ba, #6649c3, #f0a5b6);
  background-color: #1519ba;
  padding: 4.5rem 0 4rem 0;
  z-index: 9000;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  ${({ theme }) => theme.breakpoints.up(980)} {
    display: none;
  }
`

export const Link = styled(CustomLink)`
  font-size: 1rem;
  color: white;
  padding: 1.25rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    padding: 1.25rem 1.5rem;
  }

  &.noBorderBottom {
    border-bottom: none;
  }

  &.selected {
    span {
      color: ${({ theme }) => theme.palette.tertiary.main};
      position: relative;

      &:after {
        position: absolute;
        content: "";
        bottom: -3px;
        left: 0;
        width: 100%;
        height: 3px;
        z-index: 8;
        background-color: ${({ theme }) => theme.palette.tertiary.main};
      }
    }
  }

  &.subItem {
    background-color: #1316a6;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
  }

  &.subSubItem {
    border-radius: 0.375rem;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 0;
    background-color: #0f1285;
    padding: 0.75rem 1rem;
    gap: 0.5rem;
  }
`

export const Text = styled(Typography)`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  text-transform: capitalize;
  line-height: normal;

  &.subItemText {
    color: #fff;
    font-size: 1.125rem;
    font-weight: 500;
    line-height: normal;
  }

  &.subSubItemText {
    color: #f5f5f5;
    font-size: 0.9375rem;
    font-weight: 500;
    line-height: 1.25rem;
  }
`

export const LoginLogo = styled(LoginSVG)`
  width: 22px;
  height: 22px;
`

export const Icon = styled(CustomImage)`
  height: 100%;
  min-height: 28px;
  max-height: 28px;
  min-width: 30px;
  max-width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    object-fit: contain !important;
  }
`

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;

  &.subItem {
    background-color: #1316a6;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0 1rem 1.25rem;

    gap: 0.37rem;

    ${({ theme }) => theme.breakpoints.up("sm")} {
      padding: 0 1.5rem 1.25rem;
    }
  }
`
