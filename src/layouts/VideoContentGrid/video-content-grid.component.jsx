import React from "react"
import * as S from "./video-content-grid.styles"
import Container from "@mui/material/Container"
import { Grid } from "@mui/material"
import parse from "html-react-parser"

export const VideoContentGrid = ({ description, title, items, services }) => {
  return (
    <S.Wrapper>
      <Container>
        {description && <S.Description>{parse(description)}</S.Description>}
        {title && <S.Title>{title}</S.Title>}
        <S.ItemsWrapper>
          {items?.map(({ videoItem, title, content }, index) => (
            <S.CustomGrid
              container
              alignItems="center"
              className={index % 2 !== 0 ? "reverse" : ""}
              key={`${title}-${index}`}
            >
              <Grid className="videoItem" item md={6} xs={12}>
                {videoItem?.iframeVideo ? (
                  <S.IframeWrapper>
                    <iframe
                      src={videoItem?.iframeVideo}
                      width="100%"
                      frameBorder={0}
                      style={{ maxHeight: "100%" }}
                    />
                  </S.IframeWrapper>
                ) : (
                  <S.Video
                    src={videoItem?.vimeoLink ?? videoItem?.video?.mediaItemUrl}
                    autoPlay={videoItem?.autoplay}
                    muted={videoItem?.autoplay}
                    loop
                    playsInline={videoItem?.autoplay}
                    controls={videoItem?.controls}
                  />
                )}
              </Grid>
              <Grid item md={6} xs={12}>
                <S.TextWrapper spacing={{ md: 2, xs: 1.5 }}>
                  {title && <S.Title className="left">{title}</S.Title>}
                  {content && (
                    <S.Description className="left">
                      {parse(content)}
                    </S.Description>
                  )}
                </S.TextWrapper>
              </Grid>
            </S.CustomGrid>
          ))}
        </S.ItemsWrapper>
        <S.ServicesWrapper>
          <Grid container spacing={4}>
            {services?.map(({ service }, index) => (
              <Grid item sm={6} xs={12} key={`${index}-${service}`}>
                <S.Service>{service}</S.Service>
              </Grid>
            ))}
          </Grid>
        </S.ServicesWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default VideoContentGrid
