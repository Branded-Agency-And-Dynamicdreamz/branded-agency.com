import React from "react"
import * as S from "./home-hero.styles"
import PlaySvg from "../../assets/play-icon.svg"
import BookCallSVG from "../../assets/right-arrow.svg"
import ReactPlayer from "react-player"
import HighlightOffIcon from "@mui/icons-material/HighlightOff"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useTheme, useMediaQuery } from "@mui/material"
import { scroller } from "react-scroll"
import VideoComponent from "../VideoComponent"

const HomeHero = ({ title, isHero, heroVideo, thumbnail }) => {
  const [playVideo, setPlayVideo] = React.useState(false)
  const theme = useTheme()

  const isMd = useMediaQuery(theme.breakpoints.up("md"))

  const handleMore = () => {
    scroller.scrollTo("next", {
      smooth: true,
      spy: true,
    })
  }

  return (
    <S.Wrapper className={`${playVideo && "playVideo"} ${isHero && "isHero"}`}>
      {isHero ? (
        <VideoComponent
          vimeoLink={heroVideo}
          autoplay
          thumbnail={thumbnail}
          arPaddingPercentage={60}
        />
      ) : (
        <>
          <S.CustomContainer maxWidth="xl" className={playVideo && "playVideo"}>
            <S.TitleWrapper>
              <S.Title>{title}</S.Title>
            </S.TitleWrapper>
            <S.BottomWrapper>
              <S.PlayButton onClick={() => setPlayVideo(true)}>
                <PlaySvg />
                <S.Text>Watch showreel</S.Text>
              </S.PlayButton>
              <S.BookCall
                target="_blank"
                url={"https://meetings.hubspot.com/george-essex/30-minute-call"}
              >
                <S.Text className="bookCall">Book a call</S.Text>
                <BookCallSVG />
              </S.BookCall>
            </S.BottomWrapper>
          </S.CustomContainer>
          {isHero && !playVideo && (
            <S.NextSection onClick={handleMore}>
              <ExpandMoreIcon />
            </S.NextSection>
          )}
          <S.VideoBg
            autoPlay
            muted
            playsInline
            loop
            className={playVideo && "playVideo"}
          >
            <source
              src={
                isMd
                  ? "https://player.vimeo.com/progressive_redirect/playback/929900438/rendition/1080p/file.mp4?loc=external&signature=49c1a9fca0603fb2e799bef6cf896567bebd23a682b2b56c57aa4cb66a93ed20"
                  : "https://player.vimeo.com/progressive_redirect/playback/922485273/rendition/720p/file.mp4?loc=external&signature=5dccd8af887f3ac267df85902677a4f8cb43080c48b2f4a59671ba1e4f6dcda2"
              }
              type="video/mp4"
            />
          </S.VideoBg>
          <S.VideoFluid className={playVideo && "playVideo"}>
            <S.CloseWrapper
              className={playVideo && "playVideo"}
              onClick={() => setPlayVideo(false)}
            >
              <HighlightOffIcon />
            </S.CloseWrapper>
            <S.VideoWrapper className={playVideo && "playVideo"}>
              <ReactPlayer
                className="react-player"
                url="https://player.vimeo.com/video/802852471?h=9a38e1d4dc?api=1"
                controls={true}
                playing={playVideo}
                width="100%"
                height="100%"
                playsinline={true}
              />
            </S.VideoWrapper>
          </S.VideoFluid>
        </>
      )}
    </S.Wrapper>
  )
}

export default HomeHero
