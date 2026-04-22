import styled from "@emotion/styled"

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-top: 2rem;
  }
`
