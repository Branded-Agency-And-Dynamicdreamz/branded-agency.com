import styled from "@emotion/styled"
import { FormControl, Select } from "@mui/material"
import Typography from "@mui/material/Typography"

export const FormWrapper = styled(FormControl)`
  width: 100%;
`

export const CustomSelect = styled(Select)`
  select {
    background-color: white;
    overflow: hidden;
    padding: 8px 12px !important;
    border-radius: 1rem;
    ${({ theme }) => theme.breakpoints.up("md")} {
      height: ${({ height }) => (height ? height : 240)}px !important;
    }
    &:focus {
      border-radius: 1rem;
    }
  }

  option {
    margin-top: 0.25rem;
    &:first-of-type {
      margin-top: 0;
    }
  }

  fieldset {
    border: 0;
  }
  border-radius: 1rem;
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

export const JobFormWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
`

export const Option = styled.div`
  padding: 0.5rem 1.25rem;
  border-radius: 52px;
  box-shadow: inset 0 0 0 1px rgba(21, 25, 186, 0.15);
  &.selected {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.palette.primary.main};
  }

  &.contact {
    &.selected {
      box-shadow: inset 0 0 0 2px white;
    }
    box-shadow: inset 0 0 0 1px rgb(255, 255, 255, 0.15);

    .optionText {
      color: white;
    }
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 0.5rem 1.5rem;
  }

  cursor: pointer;
`

export const Label = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;

  &.title {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.palette.primary.main};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  &.contact {
    color: white;
    font-size: 1.125rem;
    opacity: 0.7;
  }
`
