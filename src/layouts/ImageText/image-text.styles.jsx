import styled from "@emotion/styled"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 2rem 0;
  ${({ theme }) => theme.breakpoints.down("md")} {
    .text {
      order: 2;
    }

    .image {
      order: 1;
    }
  }
  ${({ theme }) => theme.breakpoints.down("lg")} {
    .MuiContainer-root {
      padding: 0;
    }
  }
`

export const Image = styled(CustomImage)`
  display: flex;
  justify-content: center;
`

export const TextWrapper = styled.div`
  padding: 2rem 1rem;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    padding: 2rem 1.5rem;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 3.5rem;
  }
`

export const Title = styled.h2`
  font-size: 1.75rem;
  line-height: 1.1;
  color: white;

  ${({ theme }) => theme.breakpoints.up(700)} {
    font-size: 2rem;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2.5rem;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 2.75rem;
  }
`

export const Description = styled.div`
  p {
    font-size: 1rem;
    line-height: 1.25;
    font-weight: 400;
    color: white;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.25rem;
    }
  }
`
