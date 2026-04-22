import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import Typography from "@mui/material/Typography"

export const Wrapper = styled.section`
  background-color: #f5f5f5;
  padding: 1.75rem 0;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    height: calc(100dvh - 72px);
    min-height: 750px;
    padding: calc(5.6rem - 72px) 0 5.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const ArticleCard = styled.div`
  position: relative;
  cursor: pointer;
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.9;
    background: ${({ theme }) => theme.palette.primary.main};
    transition: opacity 0.3s ease;
  }
  &.active {
    &:after {
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  }
`

export const Image = styled(CustomImage)``

export const ProgressBar = styled.div`
  border-radius: 20px;
  height: 7px;
  width: 100%;
  background: #e1e4f0;
  margin-top: 1.7rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-top: 4.2rem;
  }

  display: flex;
`

export const Dot = styled.div`
  width: 100%;
  background-color: transparent;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &.active {
    transition: background-color 0.3s ease;
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  height: 100%;
  justify-content: flex-end;

  .topText {
    position: relative;
    //transition:
    //  left 0.5s ease,
    //  opacity 0.4s ease;
    //left: 400px;
    //opacity: 0;
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 800;
    line-height: 110%;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 3.75rem;
    }
  }

  .bottomText {
    position: relative;
    //transition:
    //  left 0.5s ease,
    //  opacity 0.4s ease;
    //left: 400px;
    //opacity: 0;
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 300;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 2rem;
    }
  }
  //
  //&.active {
  //  .topText {
  //    transition:
  //      left 0.5s ease,
  //      opacity 0.8s ease;
  //    left: 0;
  //    opacity: 1;
  //  }
  //  .bottomText {
  //    transition:
  //      left 0.5s ease,
  //      opacity 0.8s ease;
  //    left: 0;
  //    opacity: 1;
  //  }
  //}
`

export const TopText = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 300;
  line-height: 110%;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2.5rem;
  }
`

export const BottomText = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: 90%;
  text-transform: uppercase;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 4.75rem;
  }
`

export const TextSwiperWrapper = styled.div`
  margin-bottom: 2.25rem;
  pointer-events: none;

  //.swiper-slide {
  //  height: auto;
  //}
`
