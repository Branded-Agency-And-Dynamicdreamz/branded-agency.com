import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Tab, Tabs } from "@mui/material"
import Typography from "@mui/material/Typography"

export const Wrapper = styled(SectionWrapper)`
  padding-top: 1.5rem;
  padding-bottom: 1rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 3.5rem;
    padding-bottom: 4rem;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 1rem;
  max-height: 100%;
  align-items: stretch;
`

export const Content = styled.div`
  position: relative;
`

export const CustomBox = styled.div`
  padding: 0 1.5rem 0 0;
  max-height: 410px;
  overflow: auto;
  position: relative;

  ${({ theme }) => theme.breakpoints.up("md")} {
    max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}px` : "100%")};
  }

  p {
    font-size: 16px;
    font-weight: 300;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: ${({ theme }) => theme.typography.pxToRem(22)};
    }
  }

  strong {
    font-weight: 800;
    &:first-of-type {
      line-height: 1;
    }
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 0 3.33rem 0 0;
  }

  &::-webkit-scrollbar {
    width: 4px;
    z-index: 4;

    ${({ theme }) => theme.breakpoints.up("md")} {
      width: 8px;
    }
  }

  &::-webkit-scrollbar-track {
    background-color: #dde1ee;
    border-radius: 55px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 55px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #0b0fc3;
  }

  p:first-of-type {
    margin-top: 0;
  }

  p:last-of-type {
    margin-bottom: 0;
  }
`

export const PanelWrapper = styled.div`
  width: 100%;
  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 70%;
  }
`

export const CustomTab = styled(Tab)`
  transition: 0.1s ease-in-out all;
  flex-direction: row;
  gap: 0.25rem;
  justify-content: flex-start;

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 0;
    min-height: unset;
  }
  padding-right: 1rem !important;

  &:after {
    ${({ theme }) => theme.breakpoints.up("md")} {
      display: none;
    }
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 1px;
    height: 65%;
    transform: translateY(-50%);
    background-color: #dde1ee;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-right: 0;
    border-right: 0;

    border-bottom: 1px solid #dde1ee;
    margin-left: 2rem;
  }

  &.Mui-disabled {
    font-weight: 800 !important;
  }

  &.Mui-selected {
    .tab {
      font-weight: 800 !important;
      transition: 0.1s ease-in-out all;
    }
  }
  &.MuiButtonBase-root {
    text-transform: capitalize !important;
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: 125%;
    text-align: left;
    align-items: flex-start;
    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.375rem;
      line-height: 125%;
    }

    ${({ theme }) => theme.breakpoints.down("md")} {
      min-width: 0;
    }
  }
`
export const CustomTabs = styled(Tabs)`
  .MuiTabs-flexContainer {
    ${({ theme }) => theme.breakpoints.down("md")} {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      column-gap: 1rem;
      row-gap: 0.25rem;
    }
  }
`

export const TitleTabs = styled(Typography)`
  font-size: 1rem !important;
  font-style: normal;
  font-weight: 800;
  line-height: 125%;
  margin-bottom: 0.875rem;
  padding-top: 1rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-bottom: 0;
    font-size: 1.375rem !important;
    line-height: 125%;
    margin-left: 2rem;
    padding: 0.75rem 0.75rem 0.75rem 1rem;
    border-bottom: 1px solid #dde1ee;
  }
`

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  column-gap: 12px;
  row-gap: 6px;
  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 0;
    padding-left: 3.4rem;
    flex-direction: column;
  }

  .title {
    font-size: 1rem !important;
    font-style: normal;
    font-weight: 800 !important;
    line-height: 1;
    margin-bottom: 0.25rem;
    padding-top: 1rem;
    width: 100%;

    ${({ theme }) => theme.breakpoints.up("md")} {
      margin-bottom: 0;
      font-size: 1.375rem !important;
      padding: 0 0.75rem 0.75rem 0;
      border-bottom: 1px solid #dde1ee;
    }
  }
`

export const Text = styled(Typography)`
  text-transform: capitalize !important;
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 1rem !important;
  font-style: normal;
  font-weight: 300;
  line-height: 125%;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-bottom: 0;
    font-size: 1.375rem !important;
    line-height: 125%;
    padding: 0.75rem 0.75rem 0.75rem 0;
    border-bottom: 1px solid #dde1ee;
  }
`

export const FadeOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  height: 60px;
  width: calc(100% - 10px);
  pointer-events: none;
  background: linear-gradient(to bottom, transparent, white);
  transition: opacity 0.3s ease;

  &.visible {
    transition: 0.3s all ease;
    opacity: 1;
  }

  &.hidden {
    transition: 0.3s all ease;
    opacity: 0;
  }
`
