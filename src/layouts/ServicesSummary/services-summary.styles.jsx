import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import Typography from "@mui/material/Typography"
import CustomButton from "../../components/custom-button/custom-button.component"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
`

export const ServicesWrapper = styled.div`
  padding: 3rem 0;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 5rem 0;
  }
`

export const ContentWrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const Title = styled.h2`
  font-size: 1.75rem;
  line-height: 1.1;
  color: white;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2rem;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2.5rem;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 2.75rem;
  }
`

export const Text = styled(Typography)`
  font-size: 1rem;
  line-height: 1.25;
  color: white;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.25rem;
  }
`

export const Button = styled(CustomButton)`
  margin-top: 1rem;
  align-self: flex-start;
`

export const Image = styled(CustomImage)`
  width: 75%;
  margin: auto;
`
