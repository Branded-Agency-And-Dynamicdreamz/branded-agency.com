import styled from "@emotion/styled"
import Typography from "@mui/material/Typography"

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const FormWrapper = styled.div`
  max-width: 687px;
  margin: 2.5rem auto 6rem;
  padding: 1rem 1rem 2rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 1.25rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 2.75rem 2.3rem;

    margin: 2.5rem auto 3rem auto;
  }
`

export const InputsWrapper = styled.div``

export const TermsDiv = styled.div`
  margin: 0 0 1em;
`

export const CaptchaError = styled(Typography)`
  color: white;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  text-align: left;
  margin-top: 3px;
  margin-right: 14px;
  margin-bottom: 0;
  margin-left: 14px;
`

export const HelperText = styled(Typography)`
  color: #fff;
  font-size: 14px;
  font-style: italic;
  font-weight: 500;
  line-height: 22px;
  opacity: 0.7;
  margin-top: 0.5rem;
`
