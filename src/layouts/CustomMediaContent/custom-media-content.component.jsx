import React from "react"
import * as S from "./custom-media-content.styles"
import { Container } from "@mui/material"
import parse from "html-react-parser"

const CustomMediaContent = ({
  contentOne,
  vimeoLink,
  autoplay,
  controls,
  contentTwo,
  isLight,
  mediaType,
  image,
}) => {
  return (
    <S.Wrapper className={isLight ? "isLight" : ""}>
      <Container maxWidth="md">
        {contentOne && <S.Content>{parse(contentOne)}</S.Content>}
        {(vimeoLink || image) && (
          <>
            {mediaType === "image" ? (
              <S.Image img={image} />
            ) : (
              <>
                {vimeoLink ? (
                  <S.Video
                    src={vimeoLink}
                    autoPlay={autoplay}
                    muted={autoplay}
                    loop
                    playsInline={autoplay}
                    controls={controls}
                  />
                ) : null}
              </>
            )}
          </>
        )}
        {contentTwo && <S.Content>{parse(contentTwo)}</S.Content>}
      </Container>
    </S.Wrapper>
  )
}

export default CustomMediaContent
