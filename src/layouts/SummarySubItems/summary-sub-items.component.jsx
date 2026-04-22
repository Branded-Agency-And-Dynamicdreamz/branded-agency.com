import React from "react"
import * as S from "./summary-sub-items.styles"
import Container from "@mui/material/Container"
import { Grid } from "@mui/material"

const SummarySubItems = ({ topText, items }) => {
  if (!items) return null

  return (
    <S.Wrapper id="values">
      <Container>
        <S.TopText>{topText}</S.TopText>
        <S.ItemsWrapper>
          <Grid container spacing={4} justifyContent="center">
            {items?.map(({ icon, title, text, link }, index) => (
              <Grid item md={4} sm={6} xs={12} key={`${index}-${title}`}>
                <S.Item>
                  <S.Icon img={icon} />
                  <S.Title>{title}</S.Title>
                  <S.Text>{text}</S.Text>
                  <S.Link url={link.url}>{link.title}</S.Link>
                </S.Item>
              </Grid>
            ))}
          </Grid>
        </S.ItemsWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default SummarySubItems
