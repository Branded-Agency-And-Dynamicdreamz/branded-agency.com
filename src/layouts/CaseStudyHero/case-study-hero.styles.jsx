import styled from "@emotion/styled"
import CustomImage from "../../components/custom-image/custom-image.component"
import { Container, Typography } from "@mui/material"

export const Section = styled.section`
  background-color: ${({ theme }) => theme.palette.text.light};
  padding-top: 3.5rem;
  padding-bottom: 5rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 6.5rem;
  }

  &.noPaddingBottom {
    padding-bottom: 0 !important;
  }
`

export const Wrapper = styled(Container)`
  display: block;
`

export const HeroImage = styled(CustomImage)`
  display: flex;
  img {
    width: 100%;
  }
`

export const Title = styled(Typography)`
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  /* margin-bottom: 1.5rem; */
  text-align: center;
  line-height: 1;
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.primary.main};
  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(44)};
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(52)};
  }
  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(72)};
  }
  margin: 0 auto;

  max-width: 900px;
`

export const Subtitle = styled(Typography)`
  font-weight: 800;
  font-size: 1.75rem;
  margin-top: 0.75rem;

  /* margin-bottom: 0.5rem; */
  max-width: 900px;
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.main};
  line-height: 1.1;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 2rem;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2.75rem;
    max-width: 900px;
  }
`

export const Description = styled.div`
  font-weight: 800;
  margin-top: 1.45rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.palette.primary.main};
  max-width: 1000px;
  font-size: 1.25rem;
  line-height: 1.75rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.5rem;
    margin-top: 1.75rem;
    line-height: 2rem;
    margin-bottom: 1.5rem;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  &.noGap {
    gap: 0;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 1.5rem;
  }
  &.spacing-sm {
    gap: 1rem;
    ${({ theme }) => theme.breakpoints.up("sm")} {
      gap: 1.5rem;
    }
    ${({ theme }) => theme.breakpoints.up("md")} {
      gap: 2rem;
    }
  }
  &.spacing-xs {
    gap: 1rem !important;
  }
  h1,
  h2 {
    font-size: 1.5rem;
    line-height: 1.1;
    font-weight: 700;
    margin-bottom: 3rem;
    ${({ theme }) => theme.breakpoints.up("sm")} {
      font-size: 2rem;
    }
    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 2.5rem;
    }
  }
  h3 {
    font-size: 1.25rem;
    line-height: 1.1;
    font-weight: 700;
    /* margin-bottom: 2.5rem; */
    ${({ theme }) => theme.breakpoints.up("sm")} {
      font-size: 1.75rem;
    }
    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.95rem;
    }
    &.title {
      margin-top: 2rem;
    }
  }
  p {
    ${({ theme }) => theme.breakpoints.up("sm")} {
      font-size: 1.25rem;
    }
  }
`

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &.left {
    .title {
      text-align: left;
      margin: 0;
      font-size: 3rem !important;
      font-style: normal;
      font-weight: 700 !important;
      line-height: 90% !important;
      ${({ theme }) => theme.breakpoints.up("md")} {
        font-size: 4.75rem !important;
      }
    }

    .subtitle {
      text-align: left;
      max-width: 705px;
      font-style: normal;
      font-weight: 800;
      font-size: 1.75rem;
      line-height: 110%;

      ${({ theme }) => theme.breakpoints.up("md")} {
        font-size: 2.5rem;
        line-height: 110%;
      }
    }

    .description {
      text-align: left;
      max-width: 705px;
      font-weight: 300;
      margin: 0;

      ${({ theme }) => theme.breakpoints.up("md")} {
        p {
          margin-top: 2.5rem;
        }
      }
    }
    align-items: flex-start;
  }
`
