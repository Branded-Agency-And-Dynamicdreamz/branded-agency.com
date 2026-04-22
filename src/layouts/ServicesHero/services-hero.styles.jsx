import styled from "@emotion/styled"
import Typography from "@mui/material/Typography"
import CustomImage from "../../components/custom-image/custom-image.component"
import Container from "@mui/material/Container"

export const Wrapper = styled.section`
  background-color: white;
  position: relative;
`

export const Slide = styled.div`
  background-color: ${({ color }) => (color ? `${color}` : "white")};
  position: relative;
  width: 100vw;
  height: calc(100dvh - 64px);
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-height: 550px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    max-height: unset;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    height: calc(100dvh - 72px);
    gap: 2rem;
  }
`

export const Title = styled.div`
  p {
    margin: 0;
    font-size: 2.5rem;
    padding-top: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 90%;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.palette.primary.main};

    ${({ theme }) => theme.breakpoints.up("sm")} {
      padding-top: 4rem;
    }

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 4.75rem;
    }

    br {
      display: none;
      ${({ theme }) => theme.breakpoints.up("md")} {
        display: block;
      }
    }
  }
`

export const Image = styled(CustomImage)`
  display: flex;
  z-index: 1;
  max-height: calc(100% - 2rem);
  position: relative;

  img {
    object-position: top;
  }

  &.desktop {
    display: none;
    ${({ theme }) => theme.breakpoints.up("md")} {
      display: flex;
    }
    ${({ offsetY }) =>
      offsetY > 0 ? `position:relative;top: -${offsetY}px` : ``};
  }

  &.mobile {
    display: flex;
    ${({ theme }) => theme.breakpoints.up("md")} {
      display: none;
    }
  }
`

export const ContentWrapper = styled(Container)`
  position: relative;
  z-index: 8;
  max-width: 1270px !important;

  .div-fade {
    height: unset !important;
  }
`

export const SwiperWrapper = styled.div`
  position: relative;
`
export const BulletsWrapper = styled.div`
  z-index: 8;
  display: flex;
  gap: 1rem;
  max-width: 1270px;
  padding-left: 0.25rem;
  padding-top: 1.5rem;
`

export const Bullet = styled.div`
  cursor: pointer;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: transparent;
  border: 3px solid ${({ theme }) => theme.palette.primary.main};
  &.active {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`
