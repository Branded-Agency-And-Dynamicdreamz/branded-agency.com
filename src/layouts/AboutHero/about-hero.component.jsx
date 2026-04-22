import React from "react"
import * as S from "./about-hero.styles"
import { Container } from "@mui/material"
import parse from "html-react-parser"
import VideoComponent from "../VideoComponent/video-component.component"

const AboutHero = ({ title, subtitle, bg, vimeoLink, thumbnail }) => {
  return (
    <S.Wrapper>
      <S.VideoWrapper>
        <VideoComponent vimeoLink={vimeoLink} autoplay thumbnail={thumbnail} />
      </S.VideoWrapper>
      {/* <S.Image img={bg} alt="About Us Hero" /> */}
      <Container>
        <S.Content>
          <S.Title variant="h1">{title}</S.Title>
          <S.Subtitle>{parse(subtitle)}</S.Subtitle>
        </S.Content>
      </Container>
    </S.Wrapper>
  )
}

export default AboutHero
