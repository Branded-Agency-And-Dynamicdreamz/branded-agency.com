import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { Container, Input, Typography } from "@mui/material"
import CustomLink from "../custom-link/custom-link.component"

export const StyledDrawer = styled.div`
  position: fixed;
  z-index: 99;
  inset: 0;
  top: calc(${({ theme }) => theme.navHeight}px + 1px);
  border-top: 1px solid rgba(0, 0, 0, 0.8);
  transition: all 0.75s ease;
  ${({ open, theme }) =>
    open
      ? css`
          background: ${theme.palette.primary.light};
        `
      : css`
          pointer-events: none;
          opacity: 0;
          background-color: transparent;
        `}
`

export const Wrapper = styled(Container)`
  width: 100%;
  height: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  max-height: calc(
    var(--viewport-height, 100vh)- ${({ theme }) => theme.navHeight}px
  );
  overflow: auto;
`

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled(Typography)`
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.palette.text.content};
  font-weight: 700;
`

export const StyledInput = styled(Input)`
  font-size: 3rem;
  line-height: 4rem;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 500;
  ::before,
  ::after {
    border: 0 !important;
  }
`

export const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2.5rem;
`

export const ResultsCategory = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  padding-bottom: 1rem;
  gap: 1rem;
`

export const ResultsCategoryTitle = styled(Typography)`
  font-size: 2.5rem;
  line-height: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`

export const ResultTitle = styled(CustomLink)`
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
  :hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

export const NoResults = styled(Typography)`
  margin-top: 2rem;
  font-size: 2rem;
  line-height: 150%;
  span {
    font-size: 6rem;
    line-height: 120%;
    margin-bottom: 1rem;
  }
`
