import styled from "@emotion/styled"
import LazyVideo from "../../components/lazy-video/lazy-video.component"
import CustomButton from "../../components/custom-button/custom-button.component"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`

export const CustomVideo = styled(LazyVideo)`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  left: 0;

  object-fit: cover !important;
`

export const Button = styled(CustomButton)`
  border-radius: 0;
  padding: 1.2rem 2.5rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  span {
    font-weight: 800;
    font-size: 1.375rem !important;
    line-height: 1 !important;
  }
`

export const Content = styled.div`
  padding: 7.5rem 0;
  position: relative;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 11rem 0;
  }

  .MuiContainer-root {
    display: flex;
    flex-direction: column;
    gap: 2.25rem;
    position: relative;
    z-index: 4;
    align-items: flex-start;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.9;
    background: ${({ theme }) => theme.palette.primary.main};
  }

  .title {
    color: ${({ theme }) => theme.palette.text.light};
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    max-width: 920px;
    width: 100%;
    overflow-wrap: break-word;
    word-break: break-word;

    ${({ theme }) => theme.breakpoints.up("sm")} {
      font-size: 3rem;
    }

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 3.75rem;
    }
  }

  .topText {
    color: ${({ theme }) => theme.palette.text.light};
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 300;
    line-height: 125%;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.625rem;
    }
  }
`

export const Image = styled(CustomImage)`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  left: 0;

  object-fit: cover !important;
`
