import styled from "@emotion/styled"
import { Tab } from "@mui/material"

export const HeaderWrapper = styled.div`
  .MuiTabs-indicator {
    height: 100%;
    border-radius: 2.3125rem;
    border: 1px solid var(--Brand-blue, #1519ba);
    background: transparent;
    pointer-events: none;
  }

  .MuiTabs-flexContainer {
    ${({ theme }) => theme.breakpoints.up("md")} {
      justify-content: center;
    }
  }
`

export const PanelsWrapper = styled.div`
  margin-top: 3.75rem;
`

export const CustomTab = styled(Tab)`
  font-weight: 600;
  text-transform: capitalize;
  color: #939393;
  font-size: 1.1875rem;
  padding: 0.875rem 1.5rem;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5.5rem;
`
