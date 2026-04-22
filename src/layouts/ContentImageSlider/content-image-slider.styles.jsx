import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import Typography from "@mui/material/Typography"
import CustomImage from "../../components/custom-image/custom-image.component"
import { Grid } from "@mui/material"

export const Wrapper = styled(SectionWrapper)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  position: relative;
  padding: 3.5rem 0 0;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 9rem 0;
  }
`

export const TopText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.light};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 300;
  line-height: 125%;
  margin-bottom: 3rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-bottom: 6.25rem;
    font-size: 1.625rem;
  }
`

export const BottomText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 625px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 3.25rem;
  }
  
  .bottomText{
    color: ${({ theme }) => theme.palette.text.light};
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 300;
    line-height: 110%;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 2.5rem;
    }

    span {
      position: relative;
      transition: font-weight 0.1s ease;

      &:after {
        content: "";
        position: absolute;
        bottom: 2px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: ${({ theme }) => theme.palette.text.light};
        opacity: 0;
        transition:
          width 0.75s ease,
          opacity 0.3s ease;
      }

      &.active {
        font-weight: 800;
        transition: font-weight 0.1s ease;
        &:after,
        &:focus:after {
          width: 100%;
          opacity: 1;
        }
      }

      cursor: pointer;
  }
`

export const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.light};
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 300;
  line-height: 110%;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2.5rem;
  }

  span {
    position: relative;
    transition: font-weight 0.1s ease;

    &:after {
      content: "";
      position: absolute;
      bottom: 2px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${({ theme }) => theme.palette.text.light};
      opacity: 0;
      transition:
        width 0.75s ease,
        opacity 0.3s ease;
    }

    &.active {
      font-weight: 800;
      transition: font-weight 0.1s ease;
      &:after,
      &:focus:after {
        width: 100%;
        opacity: 1;
      }
    }

    cursor: pointer;
    //&.active {
    //  font-size: 2.5rem;
    //  font-style: normal;
    //  font-weight: 800;
    //  line-height: 110%;
    //  text-decoration-line: underline;
    //  text-decoration-thickness: 2px;
    //}
  }
`

export const NextSection = styled.div`
  margin-top: 4.5rem;
  position: relative;
  cursor: pointer;
  display: none;

  ${({ theme }) => theme.breakpoints.up("md")} {
    display: block;
  }
`

export const CustomGrid = styled(Grid)`
  position: relative;
  width: 100%;
  height: 400px;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    height: 700px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }

  .swiper {
    width: 100vw;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);

    ${({ theme }) => theme.breakpoints.up("md")} {
      width: 100%;
      margin-top: 0;
      transform: unset;
      left: unset;
    }
  }
`

export const Content = styled.div`
  margin-bottom: 3.5rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-bottom: 0;
  }

  .topText {
    color: ${({ theme }) => theme.palette.text.light};
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 300;
    line-height: 125%;

    div:last-of-type {
      margin-bottom: 3rem;
    }

    ${({ theme }) => theme.breakpoints.up("md")} {
      div:last-of-type {
        margin-bottom: 6.25rem;
      }
      font-size: 1.625rem;
    }
  }
`

export const Image = styled(CustomImage)`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;

  &.active {
    &:after {
      opacity: 0;
      transition: opacity 0.75s ease;
    }
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-color: ${({ theme }) => theme.palette.primary.main};
    z-index: 4;
    transition: opacity 0.75s ease;
  }
`
