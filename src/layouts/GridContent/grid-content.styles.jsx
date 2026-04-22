import styled from "@emotion/styled"
import CustomImage from "../../components/custom-image/custom-image.component"
import VideoComponent from "../VideoComponent/video-component.component"

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.text.light};
  display: flex;
  align-items: center;
  flex-direction: column;
  ${({ theme }) => theme.breakpoints.up("md")} {
    flex-direction: row;
  }
  &.reverse {
    ${({ theme }) => theme.breakpoints.up("sm")} {
      flex-direction: row-reverse;
    }
  }
  &.spacing-sm {
    gap: 1rem;
    ${({ theme }) => theme.breakpoints.up("sm")} {
      gap: 1.5rem;
    }
    ${({ theme }) => theme.breakpoints.up("md")} {
      gap: 2rem;
    }
  }
  &.spacing-md {
    gap: 2rem;
    ${({ theme }) => theme.breakpoints.up("sm")} {
      gap: 2.5rem;
    }
    ${({ theme }) => theme.breakpoints.up("md")} {
      gap: 3rem;
    }
  }

  &.add-margin-top {
    margin-top: 4.5rem;

    ${({ theme }) => theme.breakpoints.up("md")} {
      margin-top: 7.5rem;
    }
  }
  width: 100%;
  height: 100%;
`

export const Subtitle = styled.div`
  h3 {
    text-align: center;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 800;
    line-height: 2rem;
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.palette.primary.main};
    margin-bottom: 1.25rem;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.75rem;
    }
  }
`

export const ItemWrapper = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  flex: 1;

  color: ${({ theme }) => theme.palette.primary.main} !important;

  h2,
  li {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  h3 {
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 800;
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
    font-weight: 800;

    ${({ theme }) => theme.breakpoints.up("md")} {
      margin: 1.5rem 0;
    }
  }

  p {
    b {
      font-weight: 800;
    }
    strong {
      font-weight: 800;
    }
  }

  a {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  p {
    margin: 1rem 0;
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

  span {
    font-weight: 300 !important;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.25rem;
  }

  li:not(:last-child) {
    margin-bottom: 1rem;
  }
`

export const FileWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  /* padding-top: ${({ paddingpercentage }) => paddingpercentage}%; */
`

export const Image = styled(CustomImage)`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    object-fit: cover;
  }
`

export const StyledVideo = styled(VideoComponent)``
