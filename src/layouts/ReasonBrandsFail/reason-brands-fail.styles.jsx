import styled from "@emotion/styled"
import { Typography } from "@mui/material"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import CustomButton from "../../components/custom-button/custom-button.component"

export const Wrapper = styled(CustomBgImage)`
  padding: 2.5rem 0;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 8.75rem 0;
  }

  .MuiContainer-root {
    padding-left: 2.25rem;
    padding-right: 2.25rem;
  }
`

export const Title = styled(Typography)`
  color: white;
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 3rem;
  font-family: ${({ theme }) => theme.fonts.secondary};

  ${({ theme }) => theme.breakpoints.down("sm")} {
    max-width: 308px;
    font-size: 2.25rem;
    line-height: 2.0625rem;
  }
`

export const Description = styled.div`
  color: white;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.625rem;
  text-align: left;
  padding-bottom: 3rem;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    max-width: 245px;
    padding-bottom: 1rem;
  }

  strong {
    font-weight: 800;
  }

  &.bottom {
    width: 180px;
    margin: 1.5rem auto;
  }
`

export const BottomText = styled(Typography)`
  color: #fff;
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.75rem;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 1.375rem;
    line-height: 1.625rem;
    max-width: 177px;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const VideoWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
`

export const ImageWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  display: flex;
`

export const Image = styled(CustomImage)``

export const TextWrapper = styled.div`
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 3rem 0;
  }
`

export const Text = styled.div`
  p {
    color: white;
    font-size: 0.9375rem;
    font-weight: 200;
    line-height: 1.1875rem;
    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.25rem;
    }
  }

  strong {
    font-weight: 800;
    line-height: 1.75rem;
  }
`

export const BottomTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-bottom: 3.75rem;

  ${({ theme }) => theme.breakpoints.down("md")} {
    align-items: center;
    padding: 1.5rem 0;
  }
`

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
  justify-content: center;
  align-items: center;

  .nextBtn {
    ${({ theme }) => theme.breakpoints.up("md")} {
      display: none;
    }
  }
`

export const Button = styled(CustomButton)`
  color: white;
  text-align: center;
  font-style: normal;
  font-weight: 800;
  width: 300px;
  border-radius: 6px;
  margin: 0 auto;
  padding: 0.75rem 0 0.75rem;
  span {
    font-size: 1.75rem;
    line-height: 2.062rem;

    ${({ theme }) => theme.breakpoints.down("md")} {
      font-size: 2.25rem;
      line-height: 2.25rem;
    }
  }
`
