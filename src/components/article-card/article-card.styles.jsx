import styled from "@emotion/styled"
import CustomImage from "../custom-image/custom-image.component"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import CustomLink from "../custom-link/custom-link.component"

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ImageWrapper = styled.div`
  position: relative;
  .MuiSvgIcon-root {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 52px;
    height: 52px;
    color: white;
  }
`
export const Img = styled(CustomImage)`
  width: 100%;
  height: 100%;
  max-width: 722px;

  ${({ theme }) => theme.breakpoints.up("lg")} {
    max-width: 822px;
  }
  &.isSlider {
    //img {
    //  max-height: 444px;
    //  object-fit: contain !important;
    //}
    margin-bottom: 2.5rem;
  }
`

export const Tag = styled.div`
  border-radius: 3.1875rem;
  background: #2685fe;
  padding: 0.375rem 1rem;
  text-align: center;
  color: white;
  display: flex;
  margin: auto;

  &.tabStyle {
    display: flex;
    padding: 0.25rem 0.75rem;
    justify-content: center;
    align-items: center;
    background: rgba(38, 133, 254, 0.1);
    color: #2685fe;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 1.25rem auto 0 0;
  }
`

export const Title = styled(Typography)`
  color: #fff;
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  margin-top: 1rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  max-width: 822px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2rem;
    line-height: 130%;
  }

  &.tabStyle {
    color: #0c0e66;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.75rem;
    margin-top: 0.75rem;
    margin-bottom: 1rem;
    text-align: left;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 1.5rem;

      line-height: 2.125rem;
    }
  }
`

export const Description = styled.div`
  color: #fff;
  p,
  h1,
  h2,
  h3,
  h4 {
    margin: 1rem 0;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    opacity: 0.9;
    max-width: 600px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  p:not(:first-child) {
    display: none;
  }

  a {
    color: white;
  }
`

export const ReadMore = styled(CustomLink)`
  margin-top: 1.5rem;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
`

export const LinkWrapper = styled(CustomLink)`
  display: flex;
  flex-direction: column;

  &.isRelatedInsights {
    p {
      color: white;
    }
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  font-size: 12px;
`
export const Info = styled(Typography)`
  color: #0c0e66;
  text-align: center;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.04688rem;
`

export const Link = styled(CustomLink)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

export const TextWrapper = styled.div`
  max-width: 822px;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`
