import React from "react"
import * as S from "./our-process.styles"
import { Container } from "@mui/material"
import parse from "html-react-parser"
import ReactPlayer from "react-player"
import PlaySvg from "../../assets/play.svg"

const OurProcess = ({ title, thumbnail, vimeoLink, description, bgImage }) => {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [isFading, setIsFading] = React.useState(false)

  const handlePlayClick = () => {
    setIsFading(true)
    setTimeout(() => {
      setIsPlaying(true)
    }, 300)
  }

  return (
    <S.Wrapper>
      {bgImage && <S.BgImage img={bgImage} alt="Background" />}
      <Container maxWidth="md">
        <S.ContentWrapper>
          {title && <S.Title variant="h2">{title}</S.Title>}
          <S.VideoContainer>
            {vimeoLink && (
              <S.PlayerWrapper>
                <ReactPlayer
                  url={vimeoLink}
                  controls={true}
                  playing={isPlaying}
                  width="100%"
                  height="100%"
                  playsinline={true}
                />
              </S.PlayerWrapper>
            )}
            <S.ThumbnailWrapper
              onClick={handlePlayClick}
              className={isFading ? "fading" : ""}
            >
              <S.ThumbnailImage img={thumbnail} alt="Video thumbnail" />
              <S.PlayButton>
                <PlaySvg />
              </S.PlayButton>
            </S.ThumbnailWrapper>
          </S.VideoContainer>
          {description && <S.Description>{parse(description)}</S.Description>}
        </S.ContentWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default OurProcess
