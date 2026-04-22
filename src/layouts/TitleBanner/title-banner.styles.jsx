import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import Typography from "@mui/material/Typography"

export const Wrapper = styled(SectionWrapper)`
  background: linear-gradient(to right, #9597e0, white, white, white, #9597e0);

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 3rem 0;
  }
`

export const Title = styled.h2`
  line-height: 1.1;
  font-size: 1.75rem;
  color: ${({theme}) => theme.palette.primary.main};

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

export const Text = styled(Typography)`
  color: ${({theme}) => theme.palette.primary.main};
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