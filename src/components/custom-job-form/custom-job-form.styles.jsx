import styled from "@emotion/styled"
import Typography from "@mui/material/Typography"
import CustomButton from "../custom-button/custom-button.component"

export const FormTitle = styled.div`
  h3 {
    color: #fff;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.5rem;
    letter-spacing: 0.64px;
  }
`
export const FormWrapper = styled.div`
  max-width: 825px;
  margin: 4rem auto 0;
  padding: 1.5rem 1.25rem;
  background-color: white;
  border-radius: 1.25rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin: 2.75rem auto 0;
    padding: 3.75rem 6.6rem;
  }
`

export const TermsDiv = styled.div`
  margin-top: 1.75rem;
`

export const CaptchaError = styled(Typography)`
  color: #d32f2f;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  text-align: left;
  margin: 3px 14px 0 14px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.75rem;
`

export const Button = styled(CustomButton)`
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
`

export const Error = styled(Typography)`
  color: #d32f2f;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  text-align: left;
  margin: 3px 14px 0 14px;
`
