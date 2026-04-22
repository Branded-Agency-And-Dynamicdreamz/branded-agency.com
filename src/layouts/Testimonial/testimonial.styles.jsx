import styled from "@emotion/styled"
import Typography from "@mui/material/Typography"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"

export const Wrapper = styled(SectionWrapper)`
  width: 100%;
`

export const TestimonialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .text {
    color: ${({ theme }) => theme.palette.primary.main};
    font-style: normal;
    font-weight: 300;
    font-size: 1.25rem !important;
    line-height: 125% !important;
    text-align: left;
    max-width: 800px;
    margin-left: 0;
    margin-right: auto;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.625rem !important;
      line-height: 125% !important;
    }
  }
  .testimonial {
    margin-bottom: 2.5rem;
  }
`

export const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-style: normal;
  font-weight: 300;
  font-size: 1.25rem !important;
  line-height: 125% !important;
  text-align: left;
  max-width: 800px;
  margin-left: 0;
  margin-right: auto;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.625rem !important;
    line-height: 125% !important;
  }

  &.testimonial {
    margin-bottom: 2.5rem;
  }
`
export const Author = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-style: normal;
  font-weight: 800;
  font-size: 1.75rem !important;
  line-height: 110% !important;
  margin-bottom: 1rem;
  text-align: left;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2.5rem !important;
    line-height: 110% !important;
  }
`

export const TextWrapper = styled.div`
  max-width: 800px;
  margin-left: 0;
  margin-right: auto;
  margin-bottom: 2.5rem;

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
