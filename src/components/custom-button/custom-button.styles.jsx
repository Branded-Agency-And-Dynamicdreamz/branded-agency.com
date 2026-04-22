import styled from "@emotion/styled"
import { Link } from "gatsby"
import { darken } from "@mui/system"
import { LoadingButton } from "@mui/lab"

export const CustomButton = styled(LoadingButton)`
  color: white;
  text-align: center;
  background-color: ${({ theme, color }) =>
    theme.palette[color]
      ? theme.palette[color].main
      : theme.palette.primary.main};
  padding: 1.09rem 1.5rem 1rem;
  box-shadow: inset 0 0 0 1px transparent;
  font-size: 1.125rem;
  font-weight: 700 !important;
  border-radius: 2.25rem;
  line-height: normal;
  text-transform: unset;
  font-family: ${({ theme }) => theme.fonts.secondary};
  vertical-align: center;
  transition: 0.2s ease-in-out all;
  &:hover {
    transition: 0.2s ease-in-out all;
    transform: scale(1.05);
    span {
      line-height: normal;
    }
  }

  .MuiTouchRipple-root {
    display: none;
  }

  span {
    position: relative;
    line-height: normal;
    display: flex;
    align-self: center;
    width: 100%;
    justify-content: center;
    height: 100%;
  }

  // ${({ theme }) => theme.breakpoints.up("md")} {
  //   padding: 0.75rem 1.5rem;
  //   font-size: 1.5rem;
  //   line-height: 1.15;
  // }

  &.light {
    box-shadow: inset 0 0 0 1px white;
    background-color: white;
    color: ${({ theme }) => theme.palette.primary.main};
    backface-visibility: hidden;

    &:hover {
      backface-visibility: hidden;
      transform: scale(1.05);
    }
  }

  &.small {
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
  }

  &.darkBorder {
    color: black;
    box-shadow: inset 0 0 0 1px black;
    background-color: transparent;

    &:hover {
      background-color: black;
      color: white;
    }
  }

  &.transparentIcon {
    padding: 0.5rem 0.5rem 0.5rem 1.5rem;
    display: flex;
    flex-direction: row;
    gap: 1.25rem;
    align-items: center;
    background-color: transparent;
    box-shadow: inset 0 0 0 1px white;

    &:hover {
      transform: scale(1.05, 1);
    }
  }

  &.lightBorder {
    color: white;
    box-shadow: inset 0 0 0 1px white;
    background-color: transparent;
    transition: 0.3s ease-in-out all;

    &:hover {
      transition: 0.3s ease-in-out all;
      transform: scale(1.05);
      background-color: rgba(255, 255, 255, 0.05) !important;
    }
  }

  &.Mui-disabled {
    color: rgba(0, 0, 0, 0.26);
    background: lightgray;
    border-color: lightgray;
    cursor: not-allowed;
  }

  .text {
    ${({ loading }) => (loading ? "opacity: 0" : "opacity: 1")};
  }
`

export const CustomButtonLink = styled(Link)`
  color: white;
  background-color: ${({ theme, color }) =>
    theme.palette[color]
      ? theme.palette[color].main
      : theme.palette.primary.main};
  padding: 0.5em 1.5em;
  text-transform: unset;
  box-shadow: inset 0 0 0 1px transparent;
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  font-weight: 700 !important;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  min-height: 40px;

  &.light {
    background-color: white;
    color: ${({ theme }) => theme.palette.primary.main};
  }

  &.darkBorder {
    color: ${({ theme }) => theme.palette.primary.main};
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.palette.primary.main};
    background-color: transparent;

    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.main};
      color: white;
    }
  }

  &.lightBorder {
    color: white;
    box-shadow: inset 0 0 0 1px white;
    background-color: transparent;
  }

  &:not(.light):not(.darkBorder):hover {
    background-color: ${({ theme, color }) =>
      darken(
        theme.palette[color]
          ? theme.palette[color].main
          : theme.palette.primary.main,
        0.1,
      )};
  }

  &.Mui-disabled {
    color: rgba(0, 0, 0, 0.26);
    background: lightgray;
    border-color: lightgray;
    cursor: not-allowed;
  }
`
