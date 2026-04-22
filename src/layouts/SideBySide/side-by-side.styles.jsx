import styled from "@emotion/styled"
import CustomImage from "../../components/custom-image/custom-image.component"
import CustomButton from "../../components/custom-button/custom-button.component"
import Typography from "@mui/material/Typography"

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.text.light};
  margin: 2.25rem 0;

  &.alignTop {
    align-items: flex-start;
    margin-top: 0;
  }

  display: flex;
  align-items: center;
  flex-direction: column;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    gap: 0 !important;
  }
  ${({ theme }) => theme.breakpoints.up("sm")} {
    flex-direction: row;
  }
  &.reverse {
    ${({ theme }) => theme.breakpoints.up("sm")} {
      flex-direction: row-reverse;
    }
  }
`

export const Title = styled(Typography)`
  margin-top: 2.75rem;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 800;
  line-height: 2rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.palette.primary.main};
  width: 100%;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.75rem;
  }
`
export const LeftWrapper = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  border-radius: 0.5rem;
  overflow: hidden;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 100% !important;
    max-width: unset !important;
  }
`

export const RightWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.25rem;
  }

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
`

export const Button = styled(CustomButton)`
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  background-color: transparent;
  color: ${({ theme }) => theme.palette.primary.main};
  align-self: flex-start;
  font-size: 1.125rem !important;
  span {
    font-weight: 800 !important;
  }

  &:hover {
    color: white;
    background-color: transparent;
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

export const Image = styled(CustomImage)`
  display: flex;
  overflow: hidden;
  width: 100%;
  img {
    object-fit: cover;
  }
`
export const Video = styled.video`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
`
