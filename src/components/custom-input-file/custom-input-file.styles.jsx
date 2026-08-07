import styled from "@emotion/styled"
import { IconButton } from "@mui/material"
import CustomInput from "../custom-input/custom-input.component"
import Typography from "@mui/material/Typography"

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`

export const Input = styled(CustomInput)`
  width: 100%;
  text-align: center !important;
  display: none;
  input {
    padding: 4.8px 12px 4.8px 6rem !important;
    height: 24px !important;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0.1px;
    color: ${({ theme }) => theme.palette.text.primary};
    font-family: ${({ theme }) => theme.fonts.primary};
    &::-webkit-file-upload-button {
      display: none;
    }
  }
`

export const FileButton = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  align-self: flex-start;
`

export const InputWrapper = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
`

export const Title = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  line-height: ${({ theme }) => theme.typography.pxToRem(18)};
  font-weight: normal;
  letter-spacing: -0.01em;
  color: white;
  margin-bottom: 0.5rem;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 1rem;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(18)};
  }
`

export const DeleteFileButton = styled(IconButton)`
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  cursor: pointer;
  width: 24px;
  height: 24px;
  z-index: 6;
  transform: translate(-125px, 160%);

  svg {
    color: #d23111;
  }
`

export const FilesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.25rem;
`

export const FileItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  border-radius: 28px;
  background-color: #f1f1fb;
  padding: 0.5rem 0.75rem;
  align-self: flex-start;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.palette.primary.main};
  }
`
export const FileName = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.typography.pxToRem(18)};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export const Close = styled(IconButton)`
  padding: 0;
  cursor: pointer;
  svg {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`
