import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"

export const Wrapper = styled(SectionWrapper)`
  background-color: ${({ theme }) => theme.palette.primary.main};

  &.transparent {
    background-color: transparent;
  }
`

export const Content = styled.div`
  max-width: 900px;
  margin: auto;
  a {
    color: white;
  }
  p {
    text-align: center;
    font-size: 1rem;
    line-height: 1.25;
    font-weight: 400;
    color: white;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.25rem;
    }
  }

  strong {
    font-weight: 900;
  }
`
