import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import CustomButton from "../../components/custom-button/custom-button.component"
import { Typography } from "@mui/material"

export const Wrapper = styled(SectionWrapper)`
  position: relative;
  background-color: white;
  padding: 1rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 1.5rem;
  }
`

export const BgImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
`

export const BgImage = styled(CustomImage)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 1;
  img {
    object-position: right;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    img {
      object-position: left;
    }
  }
`

export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: linear-gradient(
    to bottom right,
    #b0c2ea 0%,
    #b0c2ea 40%,
    #6b8bc7 60%,
    #38589c 100%
  );
`

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  /* ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 15rem;
    padding-bottom: 12rem;
  } */
`

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-left: 0;
  max-width: 777px;
  padding-top: 5rem;
  padding-bottom: 5rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 3.375rem;
    padding-top: 15rem;
    padding-bottom: 12rem;
  }
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.palette.primary.main};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 3rem;
  font-weight: 700;
  line-height: 0.9;
  text-transform: uppercase;
  margin: 0;
  font-style: normal;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 4.75rem;
  }
`

export const Description = styled.div`
  color: ${({ theme }) => theme.palette.primary.main};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 125%;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.625rem;
    line-height: 1.25;
  }

  p {
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 300;
    margin: 0;

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`

export const Button = styled(CustomButton)`
  border-radius: 0;
  align-self: flex-start;
`

export const InnerWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 2.5rem 0;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`
