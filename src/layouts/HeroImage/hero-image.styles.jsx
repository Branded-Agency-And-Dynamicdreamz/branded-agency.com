import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled(SectionWrapper)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 560px;

  .MuiContainer-root {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 2rem 0;
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1;
  text-transform: uppercase;
  position: absolute;
  color: white;
  text-align: center;
  top: 50%;
  left: 50%;
  max-width: 350px;

  font-family: ${({ theme }) => theme.fonts.secondary};

  transform: translate(-50%, -50%);
  width: 100%;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 2.75rem;
    max-width: 500px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 3.25rem;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 3.75rem;
  }
`

export const Image = styled(CustomImage)`
  img {
    max-height: 532px;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    img {
      object-fit: cover !important;
      height: 250px;
    }
  }
`
