import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import Typography from "@mui/material/Typography"

export const Wrapper = styled(SectionWrapper)`
  background: ${({ theme }) => theme.palette.primary.main};
  padding: 5.5rem 0;

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 3rem 0;
  }
`

export const Title = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 1.75rem;
  line-height: 1.1;
  font-weight: 700;
  margin-bottom: 1.5rem;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 2rem;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2.5rem;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 2.75rem;
  }
`

export const Content = styled.div`
  color: ${({ theme }) => theme.palette.primary.main};
  max-width: 450px;
  margin: 0 auto 2.25rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 400;
  opacity: 0.9;

  p,
  a {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5rem;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.125rem;
      line-height: 1.625rem;
    }
  }

  a {
    color: ${({ theme }) => theme.palette.tertiary.light};
    text-decoration: none;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const FormWrapper = styled.div`
  max-width: 800px;
  background-color: white;
  margin: 0 auto;
  padding: 3rem 1rem 3rem;
  background-image: ${({ theme }) => theme.palette.primary.main};
  border-radius: 1.25rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 3.75rem 5.78rem;
  }
`

export const TermsDiv = styled.div`
  margin: 0 0 1em;
`

export const CaptchaError = styled(Typography)`
  font-weight: 400;
  color: #d32f2f;
  font-size: 0.75rem;
  line-height: 1.66;
  text-align: left;
  margin-top: 3px;
  margin-right: 14px;
  margin-bottom: 0;
  margin-left: 14px;
`
