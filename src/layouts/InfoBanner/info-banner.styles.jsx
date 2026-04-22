import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import Typography from "@mui/material/Typography"
import CustomButton from "../../components/custom-button/custom-button.component"

export const Wrapper = styled(SectionWrapper)`
  ${({ theme }) => theme.breakpoints.up("sm")} {
    padding-top: 7.8rem;
    padding-bottom: 7.8rem;
  }

  padding-top: 5.8rem;
  padding-bottom: 5.8rem;
`

export const ContentWrapper = styled.div`
  max-width: 690px;
  margin: auto;
`

export const Title = styled.h2`
  font-size: 1.75rem;
  line-height: 1.1;
  color: white;
  text-align: center;
  width: 100%;
  font-weight: 700;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 3rem;
    line-height: 3.5rem;
    width: 100%;
  }
`

export const Text = styled(Typography)`
  font-size: 1rem;
  line-height: 1.25;
  color: white;
  text-align: center;
  font-weight: 400;
  margin-top: 1.75rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`

export const BtnWrapper = styled.div`
  text-align: center;
`

export const Button = styled(CustomButton)`
  margin: 1.25rem auto 0;

  ${({ theme }) => theme.breakpoints.up("lg")} {
    margin: 2rem auto 0;
  }

  align-self: center;
`
