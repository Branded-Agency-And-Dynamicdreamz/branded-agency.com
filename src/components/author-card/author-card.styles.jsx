import styled from "@emotion/styled"
import CustomImage from "../custom-image/custom-image.component"
import { Typography } from "@mui/material"

export const AuthorCard = styled.div`
  border-radius: 0.5rem;
  background: #f4f3f0;
  padding: 1rem 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: space-between;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 2rem 2.5rem;
    flex-direction: row;
    justify-content: space-between;
  }

  margin-top: 3.75rem;
`

export const LeftWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const AuthorImg = styled(CustomImage)`
  border-radius: 100%;
  clip-path: circle(45%) content-box;
  width: 64px;
  height: 64px;
`

export const AuthorInfo = styled.div``

export const Name = styled(Typography)`
  color: #000029;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2rem;
`

export const Job = styled(Typography)`
  color: #000029;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  opacity: 0.6;
`

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    justify-content: center;
  }
`
