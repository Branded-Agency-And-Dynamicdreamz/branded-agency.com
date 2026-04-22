import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import Typography from "@mui/material/Typography"
import CustomButton from "../../components/custom-button/custom-button.component"
import CustomLink from "../../components/custom-link/custom-link.component"

export const Wrapper = styled(SectionWrapper)`
  background-color: ${({ theme }) => theme.palette.primary.main};

  padding-top: 5.8rem;
  padding-bottom: 5.8rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 7.8rem;
    padding-bottom: 7.8rem;
  }
`

export const Text = styled(Typography)`
  font-size: 1.625rem;
  line-height: 2.25rem;
  font-weight: 700;
  color: white;
  text-align: center;
  max-width: 1050px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 3rem;
    line-height: normal;
  }
`

export const Button = styled(CustomButton)`
  align-self: center;
  svg {
    width: 48px;
    height: 48px;
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary.main};
`

export const TextWrapper = styled.div`
  overflow: hidden;
`

export const LinksWrapper = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Link = styled(CustomLink)`
  font-size: 1.25rem;
  line-height: 1.25;
  color: white;
  align-self: center;
  text-decoration: underline;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 1.2rem;
  }
`
