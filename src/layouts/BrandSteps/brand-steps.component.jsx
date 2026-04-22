import React from "react"
import * as S from "./brand-steps.styles"
import Container from "@mui/material/Container"
import { Grid } from "@mui/material"

const BrandSteps = ({ items }) => {
  return (
    <S.Wrapper>
      <Container>
        {items?.map(({ image, title, text, button, id }, index) => (
          <S.CustomGrid
            container
            alignItems="center"
            className={index % 2 !== 0 ? "reverse" : ""}
            key={`${title}-${index}`}
            id={id}
          >
            <Grid item md={6} xs={12}>
              {image && <S.Image img={image} />}
            </Grid>
            <Grid item md={6} xs={12}>
              <S.TextWrapper spacing={3}>
                {title && <S.Title>{title}</S.Title>}
                {text && <S.Description>{text}</S.Description>}
                {button && (
                  <S.Button className="lightBorder" href={button.url}>
                    {button.title}
                  </S.Button>
                )}
              </S.TextWrapper>
            </Grid>
          </S.CustomGrid>
        ))}
      </Container>
    </S.Wrapper>
  )
}

export default BrandSteps
