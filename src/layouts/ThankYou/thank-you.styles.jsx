import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import Typography from "@mui/material/Typography"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled(SectionWrapper)`
  height: calc(
    var(--viewport-height, 100vh) - ${({ theme }) => theme.navHeight}px
  );

  .MuiContainer-root {
    height: 100%;
  }
`

export const TextWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
  position: relative;
  
`

export const Title = styled(Typography)`
  text-transform: uppercase;
  font-family: ${({theme}) => theme.fonts.secondary};

  color: white;
  font-size: 32px;
  font-weight: 600;
  line-height: normal;

  ${({theme}) => theme.breakpoints.up("sm")} {
    font-size: 64px;
  }

  ${({theme}) => theme.breakpoints.up("md")} {
    font-size: 100px;
  }
;
`

export const Description = styled(Typography)`
  text-align: center;
  font-size: 22px;
  line-height: normal;
  margin: 0;
  color: white;
`

export const Img = styled(CustomImage)`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    object-fit: contain !important;
  }
`