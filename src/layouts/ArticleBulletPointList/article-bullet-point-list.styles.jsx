import styled from "@emotion/styled"
import { Typography } from "@mui/material"
import CheckSVG from "../../assets/check.svg"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  margin-top: 1rem;
  margin-bottom: 2rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 0 5rem;
    margin-bottom: 5rem;
  }
`

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.88rem;
  align-items: center;
`

export const CheckIcon = styled(CheckSVG)`
  min-width: 29px;
  min-height: 29px;
  max-width: 29px;
  max-height: 29px;
`

export const Item = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 1.25rem;

  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
`
