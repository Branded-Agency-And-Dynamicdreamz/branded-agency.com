import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import Typography from "@mui/material/Typography"

export const Wrapper = styled(SectionWrapper)`
  padding-top: 5.6rem;
  padding-bottom: 5.5rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 7.8rem;

    padding-bottom: 8rem;
  }
`

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }

  svg {
    width: 75px;
    height: 75px;
    color: white;
  }

  cursor: pointer;

  &.prev1 {
    left: -25px;
  }

  &.next1 {
    right: -25px;
  }

  z-index: 5;
`

export const SwiperWrapper = styled.div`
  position: relative;

  .swiper-slide {
    visibility: hidden;
  }

  .swiper-slide-active {
    visibility: visible;
  }
`

export const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 0 2.5rem;
  }
`

export const Name = styled(Typography)`
  font-size: 1.75rem;
  line-height: 1.1;
  color: ${({ theme }) => theme.palette.tertiary.main};
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;

  ${({ theme }) => theme.breakpoints.up(750)} {
    margin-bottom: 0.5rem;
    font-size: 2.5rem;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 2.75rem;
  }
`

export const Job = styled(Typography)`
  color: ${({ theme }) => theme.palette.tertiary.main};
  font-size: 1rem;
  line-height: 1.25;
  font-style: italic;
  text-align: center;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.25rem;
  }
`

export const Text = styled(Typography)`
  font-size: 1rem;
  line-height: 1.5rem;
  color: white;
  max-width: 792px;
  text-align: center;
  margin-top: 1.5rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.25rem;
  }
`

export const BulletsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.125rem;
  justify-content: center;
  margin-top: 2rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    display: none;
  }
`

export const Bullet = styled.div`
  width: 14px;
  height: 4px;
  background-color: white;
  opacity: 0.3;
  transition: all 0.3s ease;

  &.active {
    width: 32px;
    opacity: 1;
    transition: all 0.3s ease;
  }
`
