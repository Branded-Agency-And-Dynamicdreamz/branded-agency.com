import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomButton from "../../components/custom-button/custom-button.component"
import { Link } from "react-scroll"

export const Wrapper = styled(SectionWrapper)`
  background-color: white;
  padding-bottom: 5rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-bottom: 10rem;
  }
`

export const DescriptionWrapper = styled.div`
  max-width: 690px;
  margin: auto;

  p,
  li {
    color: #000;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2rem;
  }

  h3 {
    color: #0e1014;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2rem;
    letter-spacing: -0.01375rem;
    margin-top: 2.5rem;

    &:first-of-type {
      margin-top: 0;
    }
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
`

export const Button = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 3rem auto 0;
  background-color: ${({ theme }) => theme.palette.primary.main};
  transition: all 0.3s ease;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`
