import { TextField, Typography } from "@mui/material"
import styled from "@emotion/styled"

export const InputContainer = styled.div`
  &.margin-top {
    margin-top: 1em;
  }

  &.text-area {
    .MuiOutlinedInput-root {
      border-radius: 20px;
      padding-top: 0.5em;
      padding-bottom: 0.5em;
    }
    input {
      padding: 0em 1em;
    }
  }

  &.border-radius-8 {
    .MuiInputBase-multiline {
      border-radius: 8px;
    }
  }
`

export const JobInputContainer = styled.div``

export const Title = styled(Typography)`
  line-height: ${({ theme }) => theme.typography.pxToRem(18)};
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
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

export const CustomInput = styled(TextField)`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.25;
  letter-spacing: -0.01em;
  //opacity: 0.5;
  width: 100%;
  .MuiInputLabel-root {
    color: #5f5f5f;
    padding: 0;
    font-size: 0.875rem;
    /* opacity: 0.5; */
  }
  .MuiInputBase-input {
    padding: 0.3rem 0.75rem;
    color: #5f5f5f;
    background-color: white;
    border-radius: 1rem;
    height: unset;
  }
  .MuiInputBase-root {
    padding: 0;
    :hover {
      .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => theme.palette.primary.dark};
      }
    }
  }
  .MuiOutlinedInput-notchedOutline {
    display: none;
  }

  .Mui-focused {
    .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.palette.primary.dark};
    }
    fieldset {
      border-color: ${({ theme }) => theme.palette.primary.dark};
    }
    &.Mui-error {
      fieldset {
        border-color: ${({ theme }) => theme.palette.primary.dark} !important;
      }
    }
  }

  .MuiFormHelperText-root.Mui-error {
    color: white;
  }

  legend {
    position: relative;
    /* > span {
      padding-right: 0.75rem;
    } */
  }
`

export const CustomJobInput = styled(TextField)`
  width: 100%;

  &.contact {
    .MuiInputBase-input {
      color: white;
      height: unset;
      font-weight: 500;
    }

    fieldset {
      border: 1px solid rgba(255, 255, 255, 0.15);
    }

    .MuiOutlinedInput-root {
      background: rgba(255, 255, 255, 0.1);
    }

    .MuiOutlinedInput-root:hover {
      .MuiOutlinedInput-notchedOutline {
        border: 1px solid white;
      }
    }
  }

  &.download {
    .MuiOutlinedInput-root {
      border-radius: 0.75rem;
    }
  }

  &.landing {
    .MuiInputBase-input {
      color: #000000;
      height: unset;
      font-weight: 500;
    }

    .MuiOutlinedInput-root {
      background: #f9f9f9;
    }
  }

  .MuiOutlinedInput-root {
    border-radius: 0.5rem;
  }

  .MuiInputBase-input {
    padding: 0.88rem 1rem;
  }

  .MuiInputLabel-root {
    color: #888aa7;
    top: -2px;

    &.Mui-focused {
      transform: translate(14px, -7px) scale(0.75);
    }
  }

  .MuiInputLabel-root.Mui-error {
    color: #d32f2f;
  }

  .MuiInputBase-multiline {
    padding: 0;
  }
`
