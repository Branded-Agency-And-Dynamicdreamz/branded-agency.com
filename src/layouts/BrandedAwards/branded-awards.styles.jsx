import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import Typography from "@mui/material/Typography"

export const Wrapper = styled(SectionWrapper)`
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 3rem 0;
  }
`

export const Title = styled.h2`
  line-height: 1.1;
  font-size: 1.75rem;
  color: white;

  max-width: 900px;
  margin: auto;

  text-align: center;

  ${({theme}) => theme.breakpoints.up("sm")} {
    font-size: 2rem;
  }

  ${({theme}) => theme.breakpoints.up("md")} {
    font-size: 2.5rem;
  }

  ${({theme}) => theme.breakpoints.up("lg")} {
    font-size: 2.75rem;
  }
`

export const Description = styled(Typography)`
  color: white;
  font-size: 0.875rem;
  line-height: 1.25;
  max-width: 900px;
  margin: auto;

  ${({theme}) => theme.breakpoints.up("sm")} {
    font-size: 1rem;
  }

  ${({theme}) => theme.breakpoints.up("md")} {
    font-size: 1.2rem;
  }

  ${({theme}) => theme.breakpoints.up("lg")} {
    font-size: 1.25rem;
  }
`

export const Separator = styled.div`
  height: 3px;
  background: white;
  border-radius: 50%;
  max-width: 600px;
  margin: 3rem auto;

  ${({theme}) => theme.breakpoints.up("md")} {
    max-width: 900px;
    margin: 5rem auto;
  }
`

export const Number = styled(Typography)`
  font-size: 2rem;
  line-height: 1.1;
  color: white;

  font-family: ${({theme}) => theme.fonts.secondary};

  ${({theme}) => theme.breakpoints.up("sm")} {
    font-size: 2.25rem;
  }

  ${({theme}) => theme.breakpoints.up("md")} {
    font-size: 3.25rem;
  }

  ${({theme}) => theme.breakpoints.up("lg")} {
    font-size: 4rem;
  }

  ::after {
    content: "+";
    font-size: 2rem;

    ${({theme}) => theme.breakpoints.up("sm")} {
      font-size: 2.25rem;
    }

    ${({theme}) => theme.breakpoints.up("md")} {
      font-size: 3.25rem;
    }

    ${({theme}) => theme.breakpoints.up("lg")} {
      font-size: 4rem;
    }
  }
`

export const AwardsText = styled(Typography)`
  color: white;
  font-size: 1.75rem;
  max-width: 540px;
  text-align: center;
  line-height: 1.25;

  ${({theme}) => theme.breakpoints.up("md")} {
    font-size: 2rem;
  }
`
