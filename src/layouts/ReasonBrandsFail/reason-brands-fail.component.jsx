import React from "react"
import * as S from "./reason-brands-fail.styles"
import Container from "@mui/material/Container"
import parse from "html-react-parser"
import { graphql, useStaticQuery } from "gatsby"
import VideoComponent from "../VideoComponent"
import NextSectionButton from "../../components/next-section-button/next-section-button.component"
import { useMediaQuery, useTheme } from "@mui/material"

const ReasonBrandsFail = ({ title, description, contentItems }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "bg-brands-fail.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"))

  const videos =
    contentItems?.filter(item => item.contentType === "video") || []
  const images =
    contentItems?.filter(item => item.contentType === "image") || []
  const texts = contentItems?.filter(item => item.contentType === "text") || []

  const combinedFirstTwoTexts = [texts[0]?.text, texts[1]?.text]
    .filter(Boolean)
    .join(" ")

  const firstCombinedTextItem = combinedFirstTwoTexts
    ? { contentType: "text", text: combinedFirstTwoTexts }
    : null

  const remainingTextItems = texts.slice(2)
  const combinedRemainingText = remainingTextItems
    .map(item => item.text)
    .filter(Boolean)
    .join(" ")

  const secondCombinedTextItem = combinedRemainingText
    ? { contentType: "text", text: combinedRemainingText }
    : null

  const reorderedItems = isMd
    ? [
        videos[0],
        firstCombinedTextItem,
        images[0],
        images[1],
        videos[1],
        secondCombinedTextItem,
      ].filter(Boolean)
    : contentItems

  return (
    <S.Wrapper id="reasons" img={staticQuery.bg}>
      <Container maxWidth="lg">
        {title && <S.Title variant="h2">{title}</S.Title>}
        {description && <S.Description>{parse(description)}</S.Description>}
        <S.ContentWrapper>
          {reorderedItems?.map(({ contentType, video, image, text }, index) => {
            if (contentType === "video") {
              return (
                <S.VideoWrapper>
                  <VideoComponent vimeoLink={video} autoplay />
                </S.VideoWrapper>
              )
            }
            if (contentType === "image") {
              return (
                <S.ImageWrapper>
                  <S.Image img={image} />
                </S.ImageWrapper>
              )
            }
            if (contentType === "text") {
              return (
                <S.TextWrapper>
                  {text && <S.Text>{parse(text)}</S.Text>}
                </S.TextWrapper>
              )
            }
          })}
        </S.ContentWrapper>
        <S.BottomTextWrapper>
          <S.BottomText>The only question that remains is…</S.BottomText>
        </S.BottomTextWrapper>
        <S.BottomWrapper>
          <S.Button href="/contact">ARE YOU READY?</S.Button>
          <NextSectionButton className="nextBtn" nextSectionId="carousel" />
        </S.BottomWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default ReasonBrandsFail
