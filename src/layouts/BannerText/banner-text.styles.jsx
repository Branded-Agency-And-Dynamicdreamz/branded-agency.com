import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomButton from "../../components/custom-button/custom-button.component"
import { Link } from "react-scroll"

export const Wrapper = styled(SectionWrapper)`
  //padding-top: 7.5rem;
  //padding-bottom: 5.5rem;
  position: relative;

  //padding-top: 3rem;
  //padding-bottom: 7rem;

  .MuiContainer-root {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
export const TextWrapper = styled.div`
  overflow: hidden;
`

export const Title = styled.div`
  h2 {
    font-size: 2.25rem;
    line-height: 2.75rem;
    max-width: 994px;
    color: white;
    text-align: center;
    margin: auto;
    padding-bottom: 0.5rem;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 800;

    ${({ theme }) => theme.breakpoints.up("md")} {
      padding-bottom: 1.5rem;
      font-size: ${({ theme }) => theme.typography.pxToRem(52)};
      line-height: 3.5rem;
    }
  }
`

export const Description = styled.div`
  max-width: 710px;
  margin: auto;

  P {
    color: white;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25;
    text-align: center;
  }

  opacity: 0.9;

  ${({ theme }) => theme.breakpoints.up("md")} {
    p {
      font-size: 1.125rem;
    }
  }
`

export const Button = styled(Link)`
  cursor: pointer;

  color: white;
  border: 1px white solid;
  background-color: transparent;

  border-radius: 2.25rem;

  padding: 0.75rem 1.5rem;
  margin-top: 1.5rem;
  align-self: center;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.pxToRem(17)};
  line-height: normal;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background: rgba(255, 255, 255, 0.05);
  }
`
