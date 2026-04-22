import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import Typography from "@mui/material/Typography"
import CustomLink from "../../components/custom-link/custom-link.component"

export const Wrapper = styled(SectionWrapper)`
  padding-top: 3rem;
  padding-bottom: 4rem;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
`

export const TopText = styled.h3`
  font-size: 1.125rem;
  color: white;
  line-height: 1.15;
  font-weight: bold;
  max-width: 850px;
  margin: auto;
  text-align: center;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.95rem;
  }
`

export const ItemsWrapper = styled.div`
  margin-top: 4rem;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    margin-top: 5rem;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-top: 9rem;
  }
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const Icon = styled(CustomImage)`
  width: 96px;
  height: 96px;
  margin: 0 auto 1.25rem;
`

export const Title = styled(Typography)`
  font-size: 1.125rem;
  line-height: 1.15;
  color: white;
  font-weight: bold;
  text-align: center;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.5rem;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 1.75rem;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    font-size: 1.95rem;
  }
`

export const Text = styled(Typography)`
  color: white;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25;
  text-align: center;

  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 1.25rem;
  }
`

export const Link = styled(CustomLink)`
  font-size: 1rem;
  line-height: 1.25;
  align-self: center;
  text-align: center;
  color: white;
  text-decoration: underline;

  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 1.25rem;
  }
`
