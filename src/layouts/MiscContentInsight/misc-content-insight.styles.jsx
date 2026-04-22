import styled from "@emotion/styled"
import { Link } from "react-scroll"
import CustomLink from "../../components/custom-link/custom-link.component"

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.text.light};
  .wp-video {
    width: 100% !important;
    video {
      width: 100%;
      height: auto;
    }
  }

  color: ${({ theme }) => theme.palette.primary.main} !important;

  h2,
  li {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  h3 {
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 800 !important;
    line-height: 2rem;
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.palette.primary.main};
    margin-bottom: 1.25rem;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.75rem;
    }
  }

  h4 {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 300 !important;
    font-size: 1.25rem;
    font-style: normal;
    line-height: 125%;
    margin: 2rem 0;
    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.625rem;
    }
  }

  p {
    line-height: 1.5;
    font-size: 16px;
    font-weight: 300;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: ${({ theme }) => theme.typography.pxToRem(22)};
    }

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
    b {
      font-weight: 800;
    }
    strong {
      font-weight: 800;
    }
  }

  img {
    display: block;
    margin: auto;
    height: auto;
    max-width: 100%;
  }

  a {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  span {
    font-weight: 300 !important;
    font-size: 1rem;
    line-height: 1.5rem;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.25rem;
  }

  .video-responsive {
    iframe {
      width: 100%;
    }
  }
  .center-image {
    display: flex;
    justify-content: center;
  }
  .blue {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  li:not(:last-child) {
    margin-bottom: 1rem;
  }

  &.fullWidth {
    width: 100vw;
    padding-left: 1rem;
    padding-right: 1rem;

    ${({ theme }) => theme.breakpoints.up("md")} {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }
`

export const Button = styled(Link)`
  padding: 0.75rem 1rem;
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 50px;
  margin: 1.5rem 0;
  cursor: pointer;
  align-self: flex-start;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin: 2rem 0;
  }

  &:hover {
    transition: 0.2s ease-in-out all;
    transform: scale(1.05);
    span {
      line-height: normal;
    }
  }

  p {
    margin: 0;
    text-align: justify;
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 1rem;
    font-style: normal;
    font-weight: 300 !important;
    line-height: 1.5rem;
    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  }
`

export const ExternalLink = styled(CustomLink)`
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 50px;
  align-self: flex-start;

  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 1rem;
  font-style: normal;
  font-weight: 800 !important;
  line-height: 1.5rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
  transition: 0.2s ease-in-out all;

  &:hover {
    color: ${({ theme }) => theme.palette.primary.main}!important;
    transition: 0.2s ease-in-out all;
    transform: scale(1.05);
    span {
      line-height: normal;
    }
  }
`

export const LinksWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`
