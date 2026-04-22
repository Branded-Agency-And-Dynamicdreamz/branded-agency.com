import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"

export const Wrapper = styled(SectionWrapper)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding-top: 5rem;
  padding-bottom: 5rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 8.75rem;
    padding-bottom: 10rem;
  }
`

export const Title = styled.h2`
  color: white;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.0325rem;
  font-size: 2.25rem;
  line-height: 2.75rem;
  margin-bottom: 2.75rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 3.25rem;
    line-height: 2.5rem;
    margin-bottom: 4rem;
  }
`
