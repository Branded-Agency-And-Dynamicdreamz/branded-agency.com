import styled from "@emotion/styled"
import CustomButton from "../../components/custom-button/custom-button.component"
import { Dialog, IconButton, Typography } from "@mui/material"
import CustomInput from "../../components/custom-input/custom-input.component"
import DownloadSVG from "../../assets/download-icon.svg"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2rem 0;
  width: 100%;
  .MuiCollapse-root {
    width: 100%;
    max-width: 560px;
    margin-top: 3rem;
  }
`

export const DownloadIcon = styled(DownloadSVG)`
  width: 24px;
  height: 24px;
  margin-right: 0.25rem;
`

export const StyledBtn = styled(CustomButton)`
  border: 1px solid ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.primary.main};
  background-color: transparent;
  font-size: 1rem;
  padding: 0.5rem 1rem !important;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 1.25rem;
  }
  :hover {
    background-color: ${({ theme }) => theme.palette.secondary.main} !important;
    border: 1px solid ${({ theme }) => theme.palette.secondary.main};
    color: ${({ theme }) => theme.palette.text.light};
  }

  &.blue {
    padding: 1rem 1.5rem !important;
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: white;
  }

  &.second {
    padding: 1.25rem 1.5rem !important;
    border-radius: 12px;
    .text {
      line-height: 1;
      align-items: center;

      ${({ theme }) => theme.breakpoints.up("md")} {
        align-items: flex-end;
      }
    }
    path {
      transition: 0.3s all ease;
    }

    :hover {
      path {
        transition: 0.3s all ease;
        stroke: white;
      }
    }
  }
`

export const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.5rem;
  margin-bottom: 2.25rem;
`

export const CloseBtn = styled(IconButton)`
  position: absolute;
  top: 0.35rem;
  right: 0.45rem;
  svg {
    color: ${({ theme }) => theme.palette.text.light};
  }
`

export const StyledDialog = styled(Dialog)`
  .MuiBackdrop-root {
    background: rgba(21, 25, 186, 0.4);
  }
  .MuiDialog-paper {
    width: 100%;
    max-width: 560px;
    background-color: transparent;
    border-radius: 1.25rem;
    margin: 16px;
  }
  .MuiAlert-root {
    width: 100%;
    border-radius: 1.25rem;
  }
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: linear-gradient(150deg, #f69ab0 -23.4%, #3b25d1 121.55%);
  padding: 2rem 1rem;
  border-radius: 1.25rem;
  gap: 0.75rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 2.75rem 2.31rem;
  }
`

export const StyledInput = styled(CustomInput)`
  width: 100%;

  &.hidden {
    display: none;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const DownloadBtn = styled(CustomButton)``

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

  &.second {
    padding: 2.5rem 1rem 1.25rem;
    ${({ theme }) => theme.breakpoints.up("md")} {
      left: 3%;
      right: unset;
      transform: translateY(-50%);
      max-width: 220px;
    }
    border-radius: 12px;
    background: linear-gradient(345deg, #f69ab0 -112.01%, #3b25d1 99.42%);
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

export const PopupBtn = styled(CustomButton)`
  font-size: 1.125rem !important;
  padding: 1rem 1rem !important;

  .text {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  &.second {
    border-radius: 0.75rem;
    font-size: 1rem !important;
    ${({ theme }) => theme.breakpoints.up("md")} {
      padding: 1rem 0.5rem !important;
    }

    svg {
      min-width: 24px;
      min-height: 24px;
    }
  }
`

export const TermsDiv = styled.div`
  margin: 0 0 1em;
`

export const CaptchaError = styled(Typography)`
  color: white;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  text-align: left;
  margin: 3px 14px 0;
`

export const Label = styled(Typography)`
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem;
  color: ${({ theme }) => theme.palette.text.light};
  opacity: 0.7;
  margin-bottom: 0.75rem;
`

export const GradientWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  .MuiCollapse-root {
    width: 100%;
    max-width: 560px;
    margin-top: 3rem;
  }
`
export const Gradient = styled.div`
  position: relative;
  border-radius: 8px;
  background: linear-gradient(0deg, #f69ab0 -250.33%, #3b25d1 100%);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LeftImg = styled(CustomImage)`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 215px;
  max-height: 129px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    position: absolute;
    left: 16px;
    bottom: 16px;
  }

  &.desktop {
    display: none;
    ${({ theme }) => theme.breakpoints.up("md")} {
      display: block;
    }
  }
`

export const RightImg = styled(CustomImage)`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 215px;
  max-height: 129px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    position: absolute;
    right: 16px;
    bottom: 16px;
  }

  &.desktop {
    display: none;
    ${({ theme }) => theme.breakpoints.up("md")} {
      display: block;
    }
  }
`

export const ImagesWrapper = styled.div`
  display: flex;
  ${({ theme }) => theme.breakpoints.up("md")} {
    display: none;
  }
`

export const Content = styled.div`
  padding: 2rem 1rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 2rem 1rem;
    gap: 2.5rem;
  }
  color: white;

  p {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 300;

    strong {
      font-weight: 800;
    }
  }

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const PopupContent = styled.div`
  color: white;
  p {
    margin: 0;
    font-size: 1.125rem;
    font-weight: 300;

    strong {
      font-weight: 800;
      font-size: 1.25rem;
    }

    :first-of-type {
      margin-bottom: 0.5rem;
    }
  }
`

export const PopupImg = styled(CustomImage)`
  width: 187px;
  height: 112px;
  margin: 2rem auto;
`
