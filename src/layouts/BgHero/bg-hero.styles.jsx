import styled from "@emotion/styled"
import { Link } from "react-scroll"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"

export const BgImage = styled(SectionWrapper)`
  height: calc(
    var(--viewport-height, 100vh) - ${({ theme }) => theme.navHeight}px
  );
  width: 100%;
  padding: 0;
  position: relative;
  display: flex;
`

export const Image = styled(CustomImage)`
  height: 100%;
  width: 100%;

  img {
    display: flex;
    height: 100%;
    width: 100%;
    object-fit: cover !important;
  }
`

export const NextSection = styled.span`
  position: absolute;
  z-index: 3;
  bottom: 25px;
  right: 50%;
  transform: translateX(50%);
  cursor: pointer;

  svg {
    color: white;
    font-size: 3rem;
  }
`
