import styled from "@emotion/styled"
import { IconButton, Typography } from "@mui/material"
import CustomLink from "../../components/custom-link/custom-link.component"
import CustomButton from "../../components/custom-button/custom-button.component"
import { Link } from "react-scroll"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"

export const Wrapper = styled(SectionWrapper)`
  height: 85vh;
  padding: 0;
  width: 100vw;
  margin: 2rem 0 0;

  &.hero {
    width: 100%;
    height: 60vh;
  }
`

export const FixedPopup = styled.div`
  position: fixed;
  z-index: 6;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  padding: 3rem 1.5rem 3rem;
  background: linear-gradient(150deg, #f69ab0 -23.4%, #3b25d1 121.55%);
  width: 100%;
  max-width: 290px;
  border-radius: 1rem;
  transition: opacity 0.3s ease-in-out;

  ${({ theme }) => theme.breakpoints.up("md")} {
    right: 3%;
    transform: translateY(-50%);
  }
  &.closed {
    opacity: 0;
    pointer-events: none;
  }
`

export const PopupClose = styled(IconButton)`
  position: absolute;
  top: 0.35rem;
  right: 0.45rem;
  svg {
    color: #fff;
    width: 20px;
    height: 20px;
  }
`

export const PopupTitle = styled(Typography)`
  text-align: center;
  font-weight: 700;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  line-height: 1.5125rem;

  color: ${({ theme }) => theme.palette.text.light};
  ${({ theme }) => theme.breakpoints.up("sm")} {
    margin-bottom: 1.75rem;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.375rem;
    line-height: 1.75rem;
  }
`

export const PopupBtn = styled(CustomLink)`
  box-shadow: inset 0 0 0 1px white;
  background-color: white;
  color: ${({ theme }) => theme.palette.primary.main};
  backface-visibility: hidden;
  transition: 0.3s ease-in-out all;
  border-radius: 2.25rem;
  cursor: pointer;
  text-align: center;
  font-weight: 700 !important;

  &:hover {
    backface-visibility: hidden;
    transform: scale(1.05);
  }

  font-size: 1.125rem !important;
  padding: 1rem 1rem !important;
  width: auto;

  .text {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`
