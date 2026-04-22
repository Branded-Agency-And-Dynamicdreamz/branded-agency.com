import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import styled from "@emotion/styled"
import CustomImage from "../../components/custom-image/custom-image.component"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import CustomLink from "../../components/custom-link/custom-link.component"

export const Wrapper = styled(SectionWrapper)`
  background: linear-gradient(0deg, #f69ab0 0%, #3b25d1 100%), #d9d9d9;
  //padding: 0;
  padding-top: 7.5rem;
  padding-bottom: 5rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 10.5rem;
    padding-bottom: 11.25rem;
  }
`

export const BgImage = styled(CustomImage)`
  max-width: 1580px;
  margin: auto;
`

export const CustomContainer = styled(Container)`
  // ${({ theme }) => theme.breakpoints.up("md")} {
  //   top: -50px;
  // }
  //
  // ${({ theme }) => theme.breakpoints.up("lg")} {
  //   top: -100px;
  // }
  //
  // ${({ theme }) => theme.breakpoints.up("xl")} {
  //   top: -200px;
  // }
  position: relative;
`

export const Title = styled.h1`
  font-size: 2rem;
  line-height: 1;
  color: white;
  text-align: center;
  max-width: 900px;
  margin: 0 auto 1rem;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    margin: 0 auto 1.5rem;
    font-size: 2.75rem;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin: 0 auto 2rem;
    line-height: 4.5rem;
    font-size: 4rem;
  }
`

export const FormTitle = styled(Typography)`
  color: #fff;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 900;
  line-height: 28px;
  margin-top: 2.5rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 1.125rem;
  }
`

export const Subtitle = styled(Typography)`
  font-size: 1.5rem;
  color: white;
  text-align: center;
  max-width: 840px;
  margin: 0 auto 2.5rem;
  font-weight: 800;
  line-height: 1.2;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 3rem;
  }
`

export const SecondTitle = styled.h2`
  font-size: 1.75rem;
  line-height: 2rem;
  color: white;
  text-align: center;
  margin-bottom: 1.5rem;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 3rem;
    line-height: 3.5rem;
  }
`

export const Content = styled.div`
  max-width: 775px;
  margin: auto;
  color: white;

  &.opacity {
    opacity: 0.9;
  }
  p {
    line-height: 1.5rem;
    text-align: center;
    font-size: 1rem;
  }

  &.description {
    p {
      font-size: 1rem;
      font-style: normal;
      font-weight: 300;
      line-height: 1.5rem;

      ${({ theme }) => theme.breakpoints.up("md")} {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
    }
  }
`

export const NameLocation = styled(Typography)`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  color: white;
  margin-bottom: 1.25rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-bottom: 1.75rem;
  }
`

export const LocationsWrapper = styled.div`
  max-width: 822px;
  margin: 0 auto;
  padding: 2.8rem 0 5.25rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 2.8rem 0 11.25rem;
  }
`

export const BookButton = styled(CustomLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.2s ease-in-out;
  padding: 0.5rem 0.5rem 0.5rem 1.5rem;
  border: 2px solid white;
  border-radius: 2.5rem;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 20px;
  }
`

export const BookLogoWrapper = styled.div`
  border-radius: 100%;
  background-color: white;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Text = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1rem;
  font-weight: 700;
  line-height: normal;
  color: white;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 17px;
  }
`

export const BookButtonWrapper = styled.div`
  display: flex;
  margin-top: 3rem;
  align-items: center;
  justify-content: center;
`
