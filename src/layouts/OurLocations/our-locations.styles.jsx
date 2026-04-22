import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import { Typography, Grid } from "@mui/material"

export const Wrapper = styled(SectionWrapper)`
  position: relative;
  background-color: white;
  padding-top: 1.5rem;

  padding-bottom: 3rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-bottom: 5.62rem;
  }
`

export const ImagesWrapper = styled.div`
  margin-bottom: 2rem;
  padding: 0 1rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-bottom: 5.56rem;
    padding: 0 1.5rem;
  }
`

export const TopImage = styled(CustomImage)`
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`

export const LocationsGrid = styled(Grid)``

export const LocationItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    gap: 2rem;
  }
`

export const Country = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 125%;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.625rem;
  }
`

export const Address = styled.div`
  p {
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 125%;
    br {
      display: none;
    }

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.625rem;
      br {
        display: block;
      }
    }

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`

export const Phone = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 125%;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.625rem;
  }
`
