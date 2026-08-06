import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"

export const Wrapper = styled(SectionWrapper)`
  background-color: white;
  padding: 3.75rem 0;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 6.25rem 0;
  }
`

export const TextWrapper = styled.div`
  p {
    &:not(:last-of-type) {
      margin-bottom: 1.5rem;
    }

    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 1.125rem;
    font-style: normal;
    line-height: 125%;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.625rem;
    }
  }

  a {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  h4 {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 300;
    font-size: 1.75rem;
    line-height: 110%;
    margin: 1.75rem 0;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 2.5rem;
      margin: 2.5rem 0;
      line-height: 120%;
    }
  }

  h4:first-of-type {
    margin-top: 0;
  }

  strong {
    position: relative;
    font-weight: 800;
  }

  a {
    position: relative;
  }
`

// ================= CLICKABLE IMAGE BUTTON =================

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2.5rem;

  ${({ theme }) => theme.breakpoints.down("md")} {
    justify-content: center;
  }
`

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 100px;
  height: 100px;
`

export const ButtonImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  display: block;
`