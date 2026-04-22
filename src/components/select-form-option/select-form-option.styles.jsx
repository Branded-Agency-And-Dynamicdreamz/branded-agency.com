import styled from "@emotion/styled"
import Typography from "@mui/material/Typography"

export const FormTitle = styled(Typography)``

export const JobFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;

  &.selected {
    margin-bottom: 1.25rem;
  }
`

export const Option = styled.div`
  padding: 0.65rem 1.5rem;
  border-radius: 52px;
  width: 100%;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    width: 376px;
  }

  &.selected {
    box-shadow: inset 0 0 0 2px white;
  }
  box-shadow: inset 0 0 0 1px rgb(255, 255, 255, 0.15);

  .optionText {
    color: white;
  }

  cursor: pointer;
`

export const Label = styled(Typography)`
  &.title {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  color: white;

  font-size: 1.125rem;
  font-weight: 300;
  text-align: center;
`
