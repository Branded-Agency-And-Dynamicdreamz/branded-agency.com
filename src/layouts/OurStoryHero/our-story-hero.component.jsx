import React from "react"
import * as S from "./our-story-hero.styles"
import { Container } from "@mui/material"
import parse from "html-react-parser"
const OurStoryHero = ({
  title,
  description,
  contentOne,
  vimeoLink,
  autoplay,
  controls,
  contentTwo,
}) => {
  return (
    <S.Wrapper>
      <Container maxWidth="md">
        <S.TitleWrapper>
          <S.Title variant="h1">{title}</S.Title>
          {description && <S.Description>{parse(description)}</S.Description>}
        </S.TitleWrapper>
        {contentOne && <S.Content>{parse(contentOne)}</S.Content>}
        {vimeoLink && (
          <S.Video
            src={vimeoLink}
            autoPlay={autoplay}
            muted={autoplay}
            loop
            playsInline={autoplay}
            controls={controls}
          />
        )}
        {contentTwo && <S.Content>{parse(contentTwo)}</S.Content>}
      </Container>
    </S.Wrapper>
  )
}

export default OurStoryHero
