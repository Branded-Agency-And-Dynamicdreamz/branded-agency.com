import React from "react"
import * as S from "./grid-content-media.styles"
import { Grid } from "@mui/material"
import FadeInOnScroll from "../../components/fade-in-on-scroll/fade-in-on-scroll.component"

const GridContentMedia = ({ sections, noPaddings }) => {
  const isGif = img => {
    return img?.mediaItemUrl?.toLowerCase()?.endsWith(".gif")
  }

  return (
    <FadeInOnScroll showAnimation>
      <S.Wrapper className={noPaddings ? "noPaddings" : ""}>
        <Grid container spacing={noPaddings ? 0 : { md: 3, xs: 2 }}>
          {sections?.map(
            (
              {
                mediaType,
                gridItemSize,
                vimeoLink,
                image,
                thumbnail,
                gridItems,
              },
              index,
            ) => (
              <Grid item xs={+gridItemSize} key={`content-grid-media-${index}`}>
                {mediaType === "video" && (
                  <S.Video
                    src={vimeoLink}
                    thumbnail={thumbnail?.publicUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                )}
                {mediaType === "image" && (
                  <S.Image
                    className={isGif(image) ? "gif" : ""}
                    img={isGif(image) ? image?.mediaItemUrl : image}
                  />
                )}
                {mediaType === "grid" && (
                  <Grid container spacing={{ md: 3, xs: 2 }}>
                    {gridItems?.map(
                      ({ image, vimeoLink, size, thumbnail }, index) => (
                        <Grid
                          item
                          xs={+size}
                          key={`content-grid-grid-media-${index}`}
                        >
                          {vimeoLink && (
                            <S.Video
                              src={vimeoLink}
                              thumbnail={thumbnail?.publicUrl}
                              autoPlay
                              muted
                              loop
                              playsInline
                            />
                          )}
                          {image && <S.Image img={image} />}
                        </Grid>
                      ),
                    )}
                  </Grid>
                )}
              </Grid>
            ),
          )}
        </Grid>
      </S.Wrapper>
    </FadeInOnScroll>
  )
}

export default GridContentMedia
