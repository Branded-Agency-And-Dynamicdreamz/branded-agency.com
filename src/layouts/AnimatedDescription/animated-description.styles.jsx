import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"

export const Wrapper = styled(SectionWrapper)`
  background-color: white;
  padding: 3.75rem 0;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 6.25rem 0;
  }
`

export const TextWrapper = styled.div`
  p {
    &:not(:last-of-type) {
      margin-bottom: 1.5rem;
    }

    color: ${({ theme }) => theme.palette.primary.main};

    font-size: 1.125rem;
    font-style: normal;
    font-weight: 300;
    line-height: 125%;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.625rem;
    }
  }
  a {
    color: ${({ theme }) => theme.palette.primary.main};
  }
  h4 {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 300;
    font-size: 1.75rem;
    line-height: 110%;

    margin: 1.75rem 0;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 2.5rem;
      margin: 2.5rem 0;
      line-height: 120%;
    }
  }

  h4:first-of-type {
    margin-top: 0;
  }

  strong {
    position: relative;
    font-weight: 800;
  }

  a {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 0.1em;
      background-color: ${({ theme }) => theme.palette.primary.main};
      opacity: 0;
      transition:
        width 0.3s ease,
        opacity 0.3s ease;
    }

    ${({ theme }) => theme.breakpoints.up("sm")} {
      &:hover:after,
      &:focus:after {
        width: 100%;
        opacity: 1;
      }
    }
  }
`
