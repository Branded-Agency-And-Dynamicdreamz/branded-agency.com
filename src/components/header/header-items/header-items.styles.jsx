import styled from "@emotion/styled"
import CustomLink from "../../custom-link/custom-link.component"
import CustomImage from "../../custom-image/custom-image.component"
import Typography from "@mui/material/Typography"
import LoginSVG from "../../../assets/login.svg"

export const Item = styled(CustomLink)`
  position: relative;
  font-size: 1.125rem;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  justify-content: space-between;
  z-index: 3;

  padding-top: ${({ theme }) => theme.typography.pxToRem(22)};
  padding-bottom: ${({ theme }) => theme.typography.pxToRem(22)};

  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 1.2rem;
    line-height: 1.25rem;
  }

  &.white {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  &.last {
    border-bottom: 0 !important;
  }

  &.selectedMain {
    position: relative;
    text-decoration: underline;
  }

  svg {
    transition: ease-in 0.2s;
  }

  &.subSubItem {
    background-color: #0f1285;
    padding: 1.38rem 1.25rem;

    border-bottom: 1px solid rgba(255, 255, 255, 0.15);

    &:hover {
      color: ${({ theme }) => theme.palette.tertiary.main};
    }

    &.selected {
      color: ${({ theme }) => theme.palette.tertiary.main};
    }
  }

  &.subItem {
    padding: 1.38rem 1.25rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);

    &:hover {
      background-color: #0f1285;

      &.first {
        border-top-left-radius: 0.75rem;
      }

      &.last {
        border-bottom-left-radius: 0.75rem;
      }

      //svg {
      //  transform: rotate(-65deg);
      //  transition: ease-in 0.3s;
      //}
    }

    &.selected {
      //color: ${({ theme }) => theme.palette.tertiary.main};
      background-color: #0f1285;
      &.first {
        border-top-left-radius: 0.75rem;
      }

      &.last {
        border-bottom-left-radius: 0.75rem;
      }
    }
  }

  //+ .items {
  //  visibility: visible;
  //  opacity: 1;
  //}

  &.selected {
    + .subItems {
      visibility: visible;
      opacity: 1;
    }
  }

  &.underline {
    text-decoration: underline;
  }

  &:hover {
    //color: ${({ theme }) => theme.palette.tertiary.main};
    + .items {
      visibility: visible;
      opacity: 1;
    }
  }
`

export const Text = styled(Typography)`
  font-size: 1.375rem;
  font-weight: 300;
  line-height: normal;
  height: 28px;
  display: flex;
  align-items: center;

  &.subItem {
    font-size: 1.0625rem;
    text-transform: capitalize;
  }
`

export const ItemWrapper = styled.div`
  &.group {
    position: relative;
  }
`

export const ItemsWrapper = styled.div`
  box-shadow: 4px 4px 22.3px 0px rgba(9, 10, 77, 0.25);

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 60px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  flex-direction: column;
  visibility: hidden;
  width: 260px;
  opacity: 0;
  z-index: 2;
  border-radius: 0.75rem;
  overflow: hidden;
  transition: ease-in 0.3s;

  &.hasSubItems {
    width: 340px;
    overflow: visible;
    left: 50%;

    border-radius: 0.75rem 0 0 0.75rem;
  }

  &:hover {
    opacity: 1;
    transition: ease-in 0.3s;
    visibility: visible;
  }
`

export const SubItemsWrapper = styled.div`
  position: absolute;
  left: 100%;
  top: 0;
  background-color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  flex-direction: column;
  width: 300px;
  visibility: hidden;
  opacity: 0;
  z-index: 2;
  border-top-right-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
  transition: ease-in 0.3s;
  overflow: hidden;

  &:hover {
    opacity: 1;
    transition: ease-in 0.3s;
    visibility: visible;
  }
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

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

export const LoginLogo = styled(LoginSVG)``
