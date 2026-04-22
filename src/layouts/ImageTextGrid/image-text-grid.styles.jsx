import styled from "@emotion/styled"
import CustomImage from "../../components/custom-image/custom-image.component"
import Typography from "@mui/material/Typography"

export const Wrapper = styled.div`
  margin: 2rem 0;
`

export const CardWrapper = styled.div``

export const Image = styled(CustomImage)``

export const Text = styled(Typography)`
  margin: 1rem 0;
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 300 !important;
  line-height: 1rem;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`
