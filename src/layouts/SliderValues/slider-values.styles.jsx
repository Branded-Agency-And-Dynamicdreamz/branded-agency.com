import styled from "@emotion/styled"
import Container from "@mui/material/Container"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import Typography from "@mui/material/Typography"

export const Wrapper = styled(SectionWrapper)`
  background: linear-gradient(
    140deg,
    #1519ba 10%,
    #3725c9,
    /*#6649c3,
    #6649c3,*/ #6649c3,
    #6649c3,
    #3725c9,
    #6649c3,
    #f0a5b6
  );

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding-top: 0;
  }

  .MuiContainer-root {
    ${({ theme }) => theme.breakpoints.down("md")} {
      padding: 0;
    }
  }
`

export const SwiperWrapper = styled.div`
  //.swiper {
  //  height: 100%;
  //}

  //padding: 3rem 0;
  //height: 100%;
  position: relative;
`

export const ValuesWrapper = styled.div`
  padding-top: 3rem;

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CustomContainer = styled(Container)`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -85%);
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
    color: white;
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  }

  cursor: pointer;

  &.prev1 {
    left: 65px;
  }

  &.next1 {
    right: 65px;
  }

  z-index: 5;
`

export const WrapperImg = styled.div`
  display: flex;
`

export const Image = styled(CustomImage)`
  width: 100%;
  height: 100%;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const Icon = styled(CustomImage)`
  width: 96px;
  height: 96px;
  margin: 0 auto 1.25rem;
`

export const Title = styled(Typography)`
  font-size: 1.125rem;
  line-height: 1.15;
  color: white;
  font-weight: bold;
  text-align: center;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.5rem;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 1.75rem;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    font-size: 1.95rem;
  }
`

export const Text = styled.div`
  p {
    font-size: 0.875rem;
    font-weight: bold;
    line-height: 1.25;
    text-align: center;
    max-width: 256px;

    background: #f0a5b6;
    color: #1519ba;

    ${({ theme }) => theme.breakpoints.up("sm")} {
      font-size: 1rem;
    }

    ${({ theme }) => theme.breakpoints.up("lg")} {
      font-size: 1.25rem;
    }
  }
`

