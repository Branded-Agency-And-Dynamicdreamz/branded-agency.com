import styled from "@emotion/styled"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
`

export const BackgroundImageWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
`

export const BackgroundImage = styled(CustomImage)`
  width: 100%;
  height: 100%;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;

  background:
    /* Sharp divider line */
    linear-gradient(
      90deg,
      transparent 65.8%,
      rgba(255, 255, 255, 0.18) 65.8%,
      rgba(255, 255, 255, 0.18) 66%,
      transparent 66%
    ),

    /* Main blue overlay */
    linear-gradient(
      90deg,
      rgba(30, 28, 172, ${({ overlayOpacity }) => overlayOpacity ?? 0.9}) 0%,
      rgba(30, 28, 172, ${({ overlayOpacity }) => overlayOpacity ?? 0.9}) 66%,
      rgba(30, 28, 172, 0) 66%
    );
` 
export const ContentWrapper = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 4rem;
  }
`

export const Content = styled.div`
  max-width: 650px;
  padding: 0;

  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: 100%;
    margin: 0 1rem;
  }
`

export const Description = styled.div`
  color: #ffffff;
  max-width: 620px;

  p {
    margin: 0 0 2rem;
    font-size: 2.2rem;
    line-height: 1.35;
    font-weight: 300;
    color: #ffffff;
    text-shadow: none;

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    font-weight: 700;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    p {
      font-size: 1.7rem;
      line-height: 1.45;
    }
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    p {
      font-size: 1.3rem;
    }
  }
`