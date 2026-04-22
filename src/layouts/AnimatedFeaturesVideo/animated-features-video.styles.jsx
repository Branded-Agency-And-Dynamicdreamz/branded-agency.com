import styled from "@emotion/styled"
import Typography from "@mui/material/Typography"

export const Wrapper = styled.section`
  padding: 0.75rem 0;
  background-color: white;

  ${({ theme }) => theme.breakpoints.up("md")} {
    &:hover .link::after {
      width: 100%;
    }
  }
`

export const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.up("md")} {
    height: calc(100dvh - 72px);
    video {
      object-fit: cover;
      transition: filter 0.1s ease-in-out;
    }
  }

  &.blur {
    ${({ theme }) => theme.breakpoints.up("md")} {
      video {
        transition: filter 0.25s ease-in-out;
        filter: blur(5px);
      }
    }
  }

  position: relative;
`

export const ContentWrapper = styled.div`
  position: relative;
  background: #1519ba;
  height: 100%;
  width: 100%;

  ${({ theme }) => theme.breakpoints.up("md")} {
    position: absolute;
    opacity: 0.9;
    top: 0;
    left: 0;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 2.5rem 1rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 1rem 5.6rem;
  }
`

export const Title = styled(Typography)`
  color: #fff;
  font-size: 2.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 90%;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-bottom: 2.5rem;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 3rem;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 4.75rem;
  }
`

export const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 2.25rem;
  }
`

export const Service = styled(Typography)`
  color: #fff;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 800;
  line-height: 110%;

  &.link {
    cursor: pointer;
    position: relative;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #fff;
    }

    ${({ theme }) => theme.breakpoints.up("md")} {
      &::after {
        width: 0;
        transition: width 0.3s ease-in-out;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.75rem;
  }
`

export const Description = styled.div`
  p {
    color: white;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 300;
    line-height: 125%;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.625rem;
    }

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  strong {
    font-weight: 800;
  }
`
