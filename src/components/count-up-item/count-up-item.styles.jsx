import styled from "@emotion/styled"
import { Typography } from "@mui/material"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Number = styled(Typography)`
  line-height: 1.1;
  font-family: ${({ theme }) => theme.fonts.secondary};
  &.number {
    color: #4483f6;
    font-weight: 800;
    font-size: 4rem !important;
    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 5.5rem !important;
    }
    &.green {
      color: #47fc90;
    }
  }
  &.percentage {
    ::after {
      content: "%";
      font-size: 1.5rem;
    }
  }

  &.plus {
    ::after {
      content: "+";
      font-size: 1.5rem;
    }
  }
`

export const Description = styled(Typography)`
  font-weight: 800;
  line-height: 1.2;
  text-align: center;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 1.25rem;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.4rem;
  }
`
