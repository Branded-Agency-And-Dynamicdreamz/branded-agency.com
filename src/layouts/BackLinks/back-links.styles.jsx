import styled from "@emotion/styled"
import CustomLink from "../../components/custom-link/custom-link.component"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"

export const Wrapper = styled(SectionWrapper)`
  padding-top: 0;
  background-color: ${({ theme }) => theme.palette.primary.main};

  &.paddingTop {
    padding-top: 1rem;

    ${({ theme }) => theme.breakpoints.up("md")} {
      padding-top: 4rem;
    }
  }

  &.transparent {
    background-color: transparent;
  }
`

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Link = styled(CustomLink)`
  font-size: 1rem;
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

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.25rem;
  }
`
