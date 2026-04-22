import styled from "@emotion/styled"

export const NextSection = styled.div`
  width: 43px;
  height: 43px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  svg {
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 40px;
  }

  &.secondary {
    background-color: ${({ theme }) => theme.palette.primary.main};
    svg {
      color: white;
    }
  }
`
