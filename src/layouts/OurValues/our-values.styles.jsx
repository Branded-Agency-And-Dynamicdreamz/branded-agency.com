import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import Typography from "@mui/material/Typography"
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import CustomButton from "../../components/custom-button/custom-button.component"

export const Wrapper = styled(SectionWrapper)`
  color: white;
  padding-top: 2rem;
  padding-bottom: 5rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 5rem;
    padding-bottom: 9rem;
  }
`

export const LeftWrapper = styled.div`
  max-width: 460px;
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: auto;
  }
`

export const Title = styled.h2`
  font-size: 2.25rem;
  line-height: 2.75rem;
  font-weight: 700;
  text-align: center;

  ${({ theme }) => theme.breakpoints.up("md")} {
    text-align: left;
    font-size: 3rem;
    line-height: 4rem;
  }
`

export const Text = styled.div`
  margin: 0 auto;
  opacity: 0.9;

  p:last-child {
    margin-bottom: 0;
  }

  p {
    text-align: center;
    font-size: ${({ theme }) => theme.typography.pxToRem(18)};
    line-height: ${({ theme }) => theme.typography.pxToRem(28)};
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 400;

    ${({ theme }) => theme.breakpoints.up("md")} {
      line-height: ${({ theme }) => theme.typography.pxToRem(30)};
      text-align: left;
    }
  }

  &.bottom {
    margin: 0 auto;
    font-family: ${({ theme }) => theme.fonts.primary};
    p {
      text-align: center;
    }
  }
`

export const ValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const Value = styled(Typography)`
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.2;
  text-align: center;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    text-align: left;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.25rem;
  }
`

export const Description = styled(Typography)`
  font-size: 0.875rem;
  line-height: 1.25;

  text-align: center;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    text-align: left;
    font-size: 1rem;
  }
  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 1.1875rem;
  }
`

export const BottomWrapper = styled.div`
  max-width: 666px;
  margin: 5rem auto 0;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-top: 8rem;
  }
`

export const BottomTitle = styled.h3`
  font-size: 2.25rem;
  line-height: 2.75rem;
  font-weight: 600;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-bottom: 1.5rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-bottom: 2.5rem;

    font-size: 3.25rem;
    line-height: 3.75rem;
    font-weight: 700;
  }
`

export const CustomAccordion = styled(Accordion)`
  box-shadow: none;
  background-color: transparent;

  &:first-of-type {
    .summary {
      padding-top: 0;
    }
  }

  &:before {
    content: none;
  }

  &.MuiPaper-elevation {
    margin: 0 !important;
  }

  padding: 0 !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 0 3rem;
  }
`

export const Question = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.light};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.typography.pxToRem(28)};
  font-style: normal;
  font-weight: 700;
  line-height: 2.25rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2rem;
  }
`

export const Answer = styled.div`
  color: ${({ theme }) => theme.palette.primary.light};
  font-size: 1.125rem;
  font-style: normal;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 400;
  line-height: ${({ theme }) => theme.typography.pxToRem(28)};

  ${({ theme }) => theme.breakpoints.up("md")} {
    line-height: ${({ theme }) => theme.typography.pxToRem(30)};
  }

  p {
    :first-of-type {
      margin-top: 0;
    }
    :last-of-type {
      margin-bottom: 0;
    }
  }
`

export const CustomAccordionSummary = styled(AccordionSummary)`
  position: relative;
  padding: 1.5rem 0 1.5rem;
  font-style: normal;
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.pxToRem(18)};
  line-height: 100%;
  letter-spacing: -0.01em;
  color: #2b1700;

  &.Mui-expanded {
    min-height: unset !important;
  }

  .MuiAccordionSummary-contentGutters,
  .Mui-expanded {
    margin: 0 !important;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: 0;
  }

  svg {
    color: ${({ theme }) => theme.palette.primary.light};
  }
`

export const CustomAccordionDetail = styled(AccordionDetails)`
  padding: 0 0 1.5rem;
  margin-top: -4px;
`

export const Button = styled(CustomButton)`
  margin-top: 2.5rem;
  align-self: center;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.pxToRem(17)} !important;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-top: 3rem;
  }
`
