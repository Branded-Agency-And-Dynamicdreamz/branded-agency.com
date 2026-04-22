import styled from "@emotion/styled"
import { Link } from "react-scroll"
import Typography from "@mui/material/Typography"
import CustomImage from "../../components/custom-image/custom-image.component"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"

export const Wrapper = styled(SectionWrapper)`
  background-image: linear-gradient(
    to right,
    #9597e0,
    white,
    white,
    white,
    #9597e0
  );
  background-position: top;
  background-size: cover;

  padding: 3rem 0;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 7rem 0;
  }
`

export const Button = styled(Link)`
  cursor: pointer;
  position: relative;
  align-self: center;

  padding: 0.6rem 1.3rem;
  font-size: 1.35rem;
  font-weight: 700 !important;
  border-radius: 1.65rem;
  line-height: 1.15;
  text-transform: unset;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 0.75rem 1.5rem;
    font-size: 1.5rem;
  }

  border: 0.165rem solid white;

  background-color: ${({ theme }) => theme.palette.primary.main};
  color: white;

  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.main};
    color: white;
  }
`

export const FirstWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`

export const Title = styled.h2`
  line-height: 1.1;
  font-size: 1.75rem;
  color: ${({ theme }) => theme.palette.primary.main};

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 2rem;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2.5rem;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 2.75rem;
  }
`

export const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 0.875rem;
  line-height: 1.25;
  text-align: center;

  max-width: 900px;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 1rem;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.2rem;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 1.25rem;
  }
`

export const Image = styled(CustomImage)`
  padding: 2rem 0;
  &.mobile {
    display: flex;

    ${({ theme }) => theme.breakpoints.up("md")} {
      display: none;
    }
  }

  &.desktop {
    display: none;

    ${({ theme }) => theme.breakpoints.up("md")} {
      display: flex;
    }
  }
`

export const SecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`
