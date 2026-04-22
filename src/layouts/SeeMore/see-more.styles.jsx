import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomButton from "../../components/custom-button/custom-button.component"

export const Wrapper = styled(SectionWrapper)`
  background-image: linear-gradient(#6649c3, #3725c9);
  background-position: top;
  background-size: cover;
`

export const Title = styled.h2`
  font-size: 1.125rem;
  line-height: 1.15;
  font-weight: 700;
  color: white;
  text-align: center;
  max-width: 900px;

  ${({ theme }) => theme.breakpoints.up(750)} {
    font-size: 1.75rem;
  }
  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 1.95rem;
  }
`

export const Button = styled(CustomButton)``
