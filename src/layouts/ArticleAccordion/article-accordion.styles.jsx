import styled from "@emotion/styled"
import Typography from "@mui/material/Typography"
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"

export const Wrapper = styled.div`
  margin: 2rem 0;
`

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 1rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-bottom: 2rem;
  }
`

export const CustomAccordion = styled(Accordion)`
  box-shadow: none;

  &:last-child {
    border-bottom: none;
  }

  &:before {
    content: none;
  }

  &.MuiPaper-elevation {
    margin: 0 !important;
  }

  padding: 0 !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 0 3rem;
  }
`

export const Question = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.25rem;
`

export const Answer = styled.div`
  color: #0c0c0c;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 155.556% */

  p {
    :first-child {
      margin-top: 0;
    }
    :last-child {
      margin-bottom: 0;
    }
  }
`

export const CustomAccordionSummary = styled(AccordionSummary)`
  position: relative;
  padding: 1.5rem 0;
  background-color: white;
  font-style: normal;
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.pxToRem(18)};
  line-height: 100%;
  letter-spacing: -0.01em;
  color: #2b1700;

  .MuiAccordionSummary-contentGutters,
  .Mui-expanded {
    margin: 0 !important;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: 0;
  }

  svg {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

export const CustomAccordionDetail = styled(AccordionDetails)`
  padding: 0.75rem 0 1.5rem;
`
