import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Typography } from "@mui/material"
import CustomImage from "../../components/custom-image/custom-image.component"
export const Wrapper = styled(SectionWrapper)`
  position: relative;
  background-color: #fff;

  padding-top: 0;
  padding-bottom: 2.93rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 10rem 0;
  }

  .MuiContainer-root {
    z-index: 4;
    position: relative;
  }
`

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 800;
  line-height: 2rem;
  margin-bottom: 1.4rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2.5rem;
    line-height: normal;
  }

  &.white {
    color: white;
  }
`

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
`

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: flex-start;
`

export const Text = styled.div`
  &.white p {
    color: white;
  }

  p {
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.1875rem;
    margin: 0;

    ${({ theme }) => theme.breakpoints.up("md")} {
      color: ${({ theme }) => theme.palette.primary.main};
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  }

  strong {
    font-weight: 800;
  }
`

export const Dot = styled.div`
  min-height: 10px;
  max-height: 10px;
  min-width: 11px;
  max-width: 11px;
  top: 5px;
  position: relative;

  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);

  background: ${({ theme }) => theme.palette.primary.main};

  &.white {
    background: white;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    background: ${({ theme }) => theme.palette.primary.main};
  }
`

export const VideoWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  padding: 0 2rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-top: 2.6rem;
  }
`

export const ImgBg = styled(CustomImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`

export const NextWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`

export const BenefitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    &.border {
      border-right: 1px solid ${({ theme }) => theme.palette.primary.main};
    }
    padding: 0;
  }
`
