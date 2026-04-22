import styled from "@emotion/styled"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled.div`
  padding-top: ${({ paddingTop }) => (paddingTop ? `${paddingTop}rem` : 0)};
  padding-bottom: ${({ paddingBottom }) =>
    paddingBottom ? `${paddingBottom}rem` : 0};

  &.swiperInMobile {
    display: none;
    ${({ theme }) => theme.breakpoints.up("md")} {
      display: block;
    }
  }
`

export const Image = styled(CustomImage)`
  height: 100%;
  width: 100%;
`

export const SliderWrapper = styled.div`
  width: 100vw;
  position: relative;
  display: block;

  ${({ theme }) => theme.breakpoints.up("md")} {
    display: none;
  }
`
