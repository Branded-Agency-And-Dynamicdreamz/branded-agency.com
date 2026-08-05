import styled from "@emotion/styled"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
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

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 3rem 3rem 8rem;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    padding: 2rem 2rem 7rem;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 2rem 1.5rem 6rem;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    gap: 1.5rem;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column-reverse;
    align-items: center;
    gap: 2rem;
    text-align: center;
  }
`

// ================= LEFT =================

export const TextContent = styled.div`
  width: 100%;
  max-width: 500px;
  flex-shrink: 0;
  padding-top: 3rem;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    max-width: 470px;
    padding-top: 2rem;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: 100%;
    padding-top: 0;
  }
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.1;
  margin: 0 0 2rem;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    font-size: 2.6rem;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 1.6rem;
  }
`

export const Description = styled.div`
  color: #ffffff;

  p {
    margin: 0;
    font-size: 1.45rem;
    line-height: 1.7;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.95);
  }

  strong {
    color: #ffffff;
    font-weight: 700;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    p {
      font-size: 1.2rem;
    }
  }
`

// ================= RIGHT IMAGE =================

export const OverlayImageBox = styled.div`
  width: 500px;
  height: 590px;
  flex-shrink: 0;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    width: 440px;
    height: 530px;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 100%;
    max-width: 400px;
    height: auto;
  }
`

export const OverlayImage = styled(CustomImage)`
  width: 100%;
  height: 100%;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    ${({ theme }) => theme.breakpoints.down("md")} {
      height: auto;
    }
  }
`

// ================= DOTS =================

export const DotsWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 3rem;

  ${({ theme }) => theme.breakpoints.down("md")} {
    justify-content: center;
  }
`

export const Dot = styled.button`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  padding: 0;
  border: 2px solid #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;

  background: ${({ active }) => (active ? "#ffffff" : "transparent")};

  &:hover {
    transform: scale(1.15);
  }
`

// ================= STICKY NAVBAR =================

export const Navbar = styled.nav`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 9999;  /* ✅ High z-index for clickability */

  background: transparent;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;

  transition: all 0.3s ease;

  /* ✅ Ensure click works */
  pointer-events: auto;

  ${({ isSticky }) =>
    isSticky &&
    `
      position: fixed;
      top: 0;
      bottom: auto;
      left: 0;
      background: #1519BA;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      box-shadow: 0 8px 24px rgba(0,0,0,.25);
      pointer-events: auto;  /* ✅ Ensure click works when sticky */
    `}
`

export const NavbarInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  min-height: 88px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2rem;

  ${({ theme }) => theme.breakpoints.down("md")} {
    min-height: 72px;
    padding: 0 1rem;
    overflow-x: auto;
    justify-content: flex-start;
    gap: 2rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`

export const NavItem = styled.button`
  flex: 1;
  background: transparent;
  border: none;

  color: rgba(255, 255, 255, 0.95);

  font-size: 1.45rem;
  font-weight: 300;
  line-height: 1.7;
  text-align: left;

  padding: 0 2rem;
  cursor: pointer;
  transition: color 0.3s ease;

  border-right: 1px solid rgba(255, 255, 255, 0.35);

  /* ✅ Ensure click works */
  pointer-events: auto;
  position: relative;
  z-index: 1;

  &:last-child {
    border-right: none;
  }

  &:hover {
    color: #ffffff;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex: none;
    min-width: 220px;
    padding: 0;
    border-right: none;

    font-size: 1.2rem;
    line-height: 1.6;
  }
`