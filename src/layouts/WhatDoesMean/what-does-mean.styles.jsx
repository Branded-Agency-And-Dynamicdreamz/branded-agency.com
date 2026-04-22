import styled from "@emotion/styled"
import { Typography } from "@mui/material"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"

export const Wrapper = styled(CustomBgImage)`
  height: 100dvh;

  .MuiContainer-root {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 30px;
    padding-left: 2.25rem;
    padding-right: 2.25rem;
  }
`

export const Card = styled.div``

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  text-align: center;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 800;
  line-height: 2.0625rem;
  width: 250px;
  margin: 0 auto;
`

export const Description = styled.div`
  p {
    color: ${({ theme }) => theme.palette.primary.main};
    text-align: center;

    font-size: 1.375rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.625rem;
  }
  strong {
    font-weight: 800;
  }
`

export const NextWrapper = styled.div`
  position: absolute;
  bottom: 100px;
`
