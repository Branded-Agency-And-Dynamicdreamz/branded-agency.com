import styled from "@emotion/styled"
import Typography from "@mui/material/Typography"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"

export const Wrapper = styled(SectionWrapper)`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: flex-start;
  padding-left: 20%;

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding-left: 12%;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding-left: 8%;
    padding-right: 8%;
  }
`

export const TestimonialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  padding: 0 0;
`

export const TextWrapper = styled.div`
  max-width: 100%;
  margin-bottom: 2.5rem;
  text-align: left;

  p {
    font-size: 1.25rem;
    line-height: 125%;
    text-align: left;
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 300;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.625rem;
      line-height: 125%;
    }

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }

    margin: 1rem 0;
  }
`

export const Author = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-style: normal;
  font-weight: 800;
  font-size: 1.75rem !important;
  line-height: 110% !important;
  margin-bottom: 0.25rem;
  text-align: left;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2.5rem !important;
    line-height: 110% !important;
  }
`

export const JobTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-style: normal;
  font-weight: 400;
  font-size: 1.1rem !important;
  line-height: 125% !important;
  text-align: left;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.25rem !important;
  }
`