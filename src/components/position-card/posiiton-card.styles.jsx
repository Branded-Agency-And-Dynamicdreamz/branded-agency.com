import styled from "@emotion/styled"
import Typography from "@mui/material/Typography"
import CustomLink from "../custom-link/custom-link.component"

export const Wrapper = styled(CustomLink)`
  padding: 1.25rem 1.25rem 1.69rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, 0.3);
  min-height: 240px;
  height: 100%;
  position: relative;
  background: transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  z-index: 3;

  ${({ theme }) => theme.breakpoints.up("md")} {
    min-height: 263px;
  }

  &:hover {
    &:before {
      opacity: 1;
      transition: all 0.3s ease;
    }
  }

  &:before {
    transition: all 0.3s ease;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    content: "";
    z-index: 2;
    background: linear-gradient(199deg, #f69ab0 -12.78%, #3b25d1 162.21%);
  }

  &:after {
    height: 7px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    content: "";
    background-color: #f0a5b6;
  }
`

export const TitleJob = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.light};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-style: normal;
  font-weight: 600;
  position: relative;
  z-index: 4;
  font-size: 1.5rem;
  line-height: 2rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.75rem;
    line-height: 2.25rem;
  }
`

export const Modality = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.light};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: relative;
  z-index: 4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    height: 24px;
    width: 24px;
    color: #f0a5b6;

    ${({ theme }) => theme.breakpoints.up("md")} {
      height: 32px;
      width: 32px;
    }
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.375rem;
  }
`
