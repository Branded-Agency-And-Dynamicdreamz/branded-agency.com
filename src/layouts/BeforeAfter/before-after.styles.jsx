import styled from "@emotion/styled"
import CustomImage from "../../components/custom-image/custom-image.component"

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  cursor: ew-resize;
  user-select: none;
  touch-action: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  contain: layout paint;

  ${({ isInGrid }) =>
    isInGrid &&
    `
    border-radius: 8px;
    box-shadow: none;
  `}
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #f3f4f6;
`

export const Image = styled(CustomImage)`
  width: 100%;
  height: 100%;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
`

export const BeforeImageWrapper = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  will-change: clip-path;
`
export const DividerLine = styled.div`
  position: absolute;
  top: 0;
  width: 6px;
  height: 100%;
  transform: translate3d(-50%, 0, 0);
  z-index: 20;
  pointer-events: none;
  background: #fff;
  will-change: left;
`

export const DividerHandle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 22px;
  height: 90px;

  background: #fff;
  border-radius: 999px;

  display: flex;
  align-items: center;
  justify-content: center;

  pointer-events: none;
  cursor: ew-resize;

  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.25),
    0 0 12px rgba(255, 255, 255, 0.35);

  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 18px;
    height: 70px;
  }
`