import styled from "@emotion/styled"
import CustomLink from "../custom-link/custom-link.component"

export const Wrapper = styled.div``

export const Link = styled.div`
  color: white;
  padding: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &.noBorderBottom {
    border-bottom: none;
  }

  &.subItem {
    background-color: #1316a6;
  }

  &.subSubItem {
    border-radius: 0.375rem;

    border-bottom: 0;
    background-color: #0f1285;
    padding: 0.75rem 1rem;
  }

  .MuiIconButton-root {
    padding: 0 1rem 0 2rem;

    ${({ theme }) => theme.breakpoints.up("sm")} {
      padding: 0 1.5rem 0 3rem;
    }

    svg {
      color: white;
      transition: 0.2s ease-in;
    }
  }

  &.open {
    svg {
      transform: rotate(180deg);
      transition: 0.2s ease-in;
    }
  }
`

export const Text = styled(CustomLink)`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  text-transform: capitalize;
  line-height: normal;
  width: 100%;
  padding: 1.25rem 0 1.25rem 1rem;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    padding: 1.25rem 0 1.25rem 1.5rem;
  }

  &.subItemText {
    color: #fff;
    font-size: 1.125rem;
    font-weight: 500;
    line-height: normal;
  }

  &.subSubItemText {
    color: #f5f5f5;
    font-size: 0.9375rem;
    font-weight: 500;
    line-height: 1.25rem;
  }
`
