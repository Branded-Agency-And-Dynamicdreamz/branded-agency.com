import styled from "@emotion/styled"
import Typography from "@mui/material/Typography"
import CustomButton from "../../components/custom-button/custom-button.component"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled.div`
  background-color: #f5f5f5;
  padding: 3.75rem 0;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 6.5rem 0;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;

  .title {
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 1.625rem;
    font-style: normal;
    font-weight: 800;
    line-height: 125%;
  }
`

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 1.625rem;
  font-style: normal;
  font-weight: 800;
  line-height: 125%;
`

export const Button = styled(CustomButton)`
  border-radius: 0;
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 800 !important;
  font-size: 1.25rem;
  padding-top: 0.875rem;
  line-height: normal;
  padding-bottom: 0.875rem;

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }

  &.mobile {
    ${({ theme }) => theme.breakpoints.up("md")} {
      display: none;
      margin-top: 0;
    }
    display: block;
    margin-top: 2rem;
  }

  &.desktop {
    ${({ theme }) => theme.breakpoints.up("md")} {
      ${({ width }) => width && `width: ${width}px;`};
      padding-left: 0.5rem;
      padding-right: 0.5rem;

      display: block;
    }
    display: none;
  }
`

export const ServicesWrapper = styled.div`
  .swiper-slide {
    width: 100%;
    height: auto;
    display: flex;

    > div {
      width: 100%;
    }
  }
`

export const ServiceCard = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const ServiceImage = styled(CustomImage)`
  flex-grow: 1;
  display: flex;
  min-height: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Text = styled.div`
  color: #fff;
  padding: 3.75rem 1rem;
  min-height: 75px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 4.5rem 1rem;
    min-height: 97px;
  }
  p {
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 300;
    line-height: 125%;

    ${({ theme }) => theme.breakpoints.up(400)} {
      max-width: unset;
    }

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.625rem;
    }

    ${({ theme }) => theme.breakpoints.up("lg")} {
      max-width: 306px;
    }

    strong {
      font-weight: 800;
    }

    max-width: 262px;
    margin: auto;
  }
`
