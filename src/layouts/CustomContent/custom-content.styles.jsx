import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"

export const Wrapper = styled(SectionWrapper)`
  background-image: linear-gradient(
    140deg,
    #1519ba 20%,
    #3725c9,
    #6649c3,
    #6649c3,
    #815588,
    #6649c3,
    #f0a5b6
  );
  color: white;
  padding-top: 1rem;
`

export const TitleWrapper = styled.div`
  padding: 1.5rem 0;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 2rem 0;
  }

  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`

export const Title = styled.h1`
  line-height: 1;
  text-transform: uppercase;
  font-size: 2rem;
  text-align: center;

  ${({ theme }) => theme.breakpoints.up(400)} {
    font-size: 2.5rem;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2.75rem;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 3.25rem;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    font-size: 4.5rem;
  }
`

export const ContentWrapper = styled.div`
  padding-top: 3.5rem;

  a {
    color: ${({ theme }) => theme.palette.tertiary.light};
  }

  h3 {
    font-size: 1.125rem;
  }

  p,
  table {
    font-size: 0.875rem;
  }

  table {
    border-collapse: collapse;
  }

  td,
  th {
    border: 1px solid white;
    padding: 8px;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    table {
      width: 43.75rem !important;
    }

    .wp-block-table {
      overflow-x: scroll !important;
    }
  }

  ${({ theme }) => theme.breakpoints.up("sm")} {
    p,
    li,
    table {
      font-size: 1rem;
    }
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    h3 {
      font-size: 1.75rem;
    }

    td,
    th {
      padding: 10px;
    }

    p,
    li,
    table {
      font-size: 1.25rem;
    }
  }
`

export const Content = styled.div``
