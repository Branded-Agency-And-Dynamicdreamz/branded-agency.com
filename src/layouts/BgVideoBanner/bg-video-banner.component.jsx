import React from "react"
import * as S from "./bg-video-banner.styles"
import Container from "@mui/material/Container"
import CustomAnimatedText from "../../components/custom-animated-text/custom-animated-text.component"

const BgVideoBanner = ({ topText, title, button, bgVideo, bgImage }) => {
  return (
    <S.Wrapper>
      <S.CustomVideo src={bgVideo} autoPlay loop />
      <S.Image img={bgImage} />
      <S.Content>
        <Container>
          {topText && (
            <CustomAnimatedText
              threshold={0.7}
              content={topText}
              className="topText"
            />
          )}
          {title && (
            <CustomAnimatedText
              threshold={1}
              content={title}
              duration={1}
              className="title"
            />
          )}
          {button && (
            <S.Button className="light" href={button.url}>
              {button.title}
            </S.Button>
          )}
        </Container>
      </S.Content>
    </S.Wrapper>
  )
}

export default BgVideoBanner
