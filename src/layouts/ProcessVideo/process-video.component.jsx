import React from "react"
import * as S from "./process-video.styles"
import { Container, Grid } from "@mui/material"
import parse from "html-react-parser"
import VideoComponent from "../VideoComponent"

const ProcessVideo = ({
  title,
  thumbnail,
  videoLink,
  description,
  content,
  link,
}) => {
  return (
    <S.Wrapper>
      <Container>
        <S.ContentWrapper>
          <Grid container spacing={3.6} alignItems="flex-start">
            <Grid item md={7.5} xs={12}>
              <S.LeftContent>
                {title && <S.Title variant="h2">{title}</S.Title>}
                <S.VideoWrapper>
                  <VideoComponent
                    thumbnail={thumbnail}
                    vimeoLink={videoLink}
                    controls={true}
                    arPaddingPercentage={56.25}
                    isTransparent={true}
                  />
                </S.VideoWrapper>
                {description && (
                  <S.Description>{parse(description)}</S.Description>
                )}
              </S.LeftContent>
            </Grid>
            <Grid item md={4.5} xs={12}>
              <S.RightContent>
                {content && <S.Content>{parse(content)}</S.Content>}
                {link?.url && (
                  <S.Link href={link.url} target={link.target || "_self"}>
                    {link.title}
                  </S.Link>
                )}
              </S.RightContent>
            </Grid>
          </Grid>
        </S.ContentWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default ProcessVideo
