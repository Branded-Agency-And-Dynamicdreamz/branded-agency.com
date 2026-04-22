import styled from "@emotion/styled"
import { Link } from "react-scroll"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import Container from "@mui/material/Container"

export const Wrapper = styled(SectionWrapper)`
  background: linear-gradient(to right, #9597e0, white, white, white, #9597e0);

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 3rem 0;
  }
`

export const Button = styled(Link)`
  cursor: pointer;
  position: relative;
  margin: auto;
  padding: 0.6rem 1.3rem;
  font-size: 1.35rem;
  font-weight: 700 !important;
  border-radius: 1.65rem;
  line-height: 1.15;
  text-transform: unset;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 0.75rem 1.5rem;
    font-size: 1.5rem;
  }

  border: 0.165rem solid white;

  background-color: ${({ theme }) => theme.palette.primary.main};
  color: white;

  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.main};
    color: white;
  }
`

export const Title = styled.h2`
  line-height: 1.1;
  font-size: 1.75rem;
  color: ${({ theme }) => theme.palette.primary.main};

  text-align: center;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 2rem;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2.5rem;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 2.75rem;
  }
`

export const SwiperWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding-bottom: 2rem;
  padding-top: 2rem;
  position: relative;

  .swiper {
    width: 80%;
  }
`

export const CustomContainer = styled(Container)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 8;
  pointer-events: none;
`

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: auto;

  svg {
    width: 100px;
    height: 100px;
    color: #1519ba;
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  }

  cursor: pointer;

  &.prev1 {
    left: -30px;
  }

  &.next1 {
    right: -30px;
  }

  z-index: 5;
`

export const Image = styled(CustomImage)`
  width: 200px;
  margin: auto;
  display: flex;
  height: 100%;
`

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 2rem;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    margin-top: 3rem;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-top: 4rem;
  }
`
