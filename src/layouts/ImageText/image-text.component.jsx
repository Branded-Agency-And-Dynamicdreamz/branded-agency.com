import React from "react"
import * as S from "./image-text.styles"
import { Grid } from "@mui/material"
import parse from "html-react-parser"
import Container from "@mui/material/Container"

const ImageText = ({ title, description, image }) => {
  if (!image) return null
  return (
    <S.Wrapper>
      <Container>
        <Grid container alignItems="center">
          <Grid className="text" item md={6} xs={12}>
            <S.TextWrapper>
              {title && <S.Title>{title}</S.Title>}
              {description && (
                <S.Description>{parse(description)}</S.Description>
              )}
            </S.TextWrapper>
          </Grid>
          <Grid className="image" item md={6} xs={12}>
            {image && <S.Image img={image} />}
          </Grid>
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default ImageText
