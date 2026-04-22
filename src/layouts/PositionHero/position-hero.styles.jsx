import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomButton from "../../components/custom-button/custom-button.component"
import { Link } from "react-scroll"

export const HeroWrapper = styled(SectionWrapper)`
  background: linear-gradient(180deg, #f69ab0 -273.26%, #3b25d1 100%);
`

export const LocationWrapper = styled.div`
  display: flex;
  margin-bottom: 0.75rem;
`

export const Location = styled.div`
  color: #fff;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.00875rem;
  padding: 0.38rem 1rem;
  border-radius: 1.4375rem;
  border: 1px solid rgba(255, 255, 255, 0.25);
  align-self: center;
  margin: auto;
`

export const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-style: normal;
  font-weight: 600;
  letter-spacing: -1.2px;

  font-size: 2rem;
  line-height: 2.5rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 3.75rem;
    line-height: 4.75rem;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 2.5rem;
`

export const Button = styled(Link)`
  color: #1519ba;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: auto;
  border-radius: 2.25rem;
  cursor: pointer;
  background-color: white;
  padding: 1rem 1.5rem;

  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`
