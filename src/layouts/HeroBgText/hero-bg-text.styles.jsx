import styled from "@emotion/styled"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.up("md")} {
    display: flex;
    align-items: center;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    display: flex;
    flex-direction: column;
    min-height: auto;
  }
`

export const BackgroundImageWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;

  ${({ theme }) => theme.breakpoints.down("md")} {
    position: relative;
    inset: auto;
    order: 2;

    width: 100%;
    height: 340px;
    overflow: hidden;
  }
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
    /* Divider line */
    linear-gradient(
      90deg,
      transparent 65.8%,
      rgba(255, 255, 255, 0.18) 65.8%,
      rgba(255, 255, 255, 0.18) 66%,
      transparent 66%
    ),
    /* Blue overlay */
    linear-gradient(
      90deg,
      rgba(30, 28, 172, ${({ overlayOpacity }) => overlayOpacity ?? 0.9}) 0%,
      rgba(30, 28, 172, ${({ overlayOpacity }) => overlayOpacity ?? 0.9}) 66%,
      rgba(30, 28, 172, 0) 66%
    );

  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
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

${({ theme }) => theme.breakpoints.down("md")} {
  order: 1;

  min-height: auto;
  max-width: 100%;

  padding: 2.5rem 1.5rem;

  background: #1e1cac;
}
`

export const Content = styled.div`
  max-width: 650px;
  padding: 0;

  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: 100%;
    margin: 0;
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

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    font-weight: 700;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: 100%;
    text-align: left;

    p {
      font-size: 1.6rem;
      line-height: 1.6;
    }
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    p {
      font-size: 1.3rem;
    }
  }
`