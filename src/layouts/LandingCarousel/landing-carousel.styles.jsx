import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled(SectionWrapper)`
  background-color: #f5f5f5;
  height: 100vh;
  display: flex;
  padding: 3rem 0 3rem;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.up("md")} {
    height: auto;
    padding: 10rem 0;
  }
`

export const SwiperWrapper = styled.div`
  height: 100%;
  position: relative;
  .swiper {
    overflow: hidden;
    height: 100%;
  }
`

export const CardWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  flex-grow: 1;
`

export const Title = styled.div`
  P {
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 1.4375rem;
    font-style: normal;
    font-weight: 800;
    line-height: 2rem;
    height: 35px;
    margin-bottom: 1rem;
    text-align: center;
    margin-top: 0;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 2.5rem;
      line-height: normal;
      padding-bottom: 3rem;
    }
  }
`

export const Image = styled(CustomImage)`
  border-radius: 8px;
  overflow: hidden;
  //max-width: 303px;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  display: flex;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    max-width: 530px;
  }

  &.desktop {
    display: none;
    ${({ theme }) => theme.breakpoints.up("sm")} {
      display: block;
    }
  }

  &.mobile {
    max-width: 303px;
    display: block;
    ${({ theme }) => theme.breakpoints.up("sm")} {
      display: none;
    }
  }
`

export const Description = styled.div`
  p {
    color: ${({ theme }) => theme.palette.primary.main};
    text-align: center;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.1875rem;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.25rem;
      line-height: 1.75rem;
      padding-top: 2.5rem;
      margin: 0;
    }
  }

  strong {
    font-weight: 800;
  }
`

export const DotsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.breakpoints.up("md")} {
    position: absolute;
    bottom: 120px;
    left: 48%;
  }
`
export const Dot = styled.div`
  height: 7px;
  width: 8px;

  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);

  background: #b8c0d8;

  &.active {
    background: ${({ theme }) => theme.palette.primary.main};
  }
`

export const ArrowButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-color: #1519ba;
  color: white;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &.prev {
    left: 80px;
  }

  &.next {
    right: 80px;
  }

  &.swiper-button-disabled {
    background-color: #b8c0d8;
    pointer-events: none;
  }

  svg {
    font-size: 30px; /* Icono más grande */
  }
`
