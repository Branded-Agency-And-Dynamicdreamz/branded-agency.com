import React from "react"
import * as S from "./image-text-grid.styles"
import { Grid } from "@mui/material"

const ImageTextGrid = ({ items }) => {
  return (
    <S.Wrapper>
      <Grid container spacing={2}>
        {items?.map(({ image, text }, index) => (
          <Grid item xs={6} key={`${text}-${index}`}>
            <S.CardWrapper>
              <S.Image img={image} />
              <S.Text>{text}</S.Text>
            </S.CardWrapper>
          </Grid>
        ))}
      </Grid>
    </S.Wrapper>
  )
}

export default ImageTextGrid
