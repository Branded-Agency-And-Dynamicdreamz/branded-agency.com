import React from "react"
import * as S from "./related-insights.styles"
import { Grid } from "@mui/material"
import ArticleCard from "../../components/article-card/article-card.component"
import Container from "@mui/material/Container"

const RelatedInsights = ({ insights, title }) => {
  if (!insights) return null

  return (
    <S.Wrapper>
      <Container>
        <S.Header>
          <S.Title>{title}</S.Title>
          <S.ViewMore url="/insights">View More</S.ViewMore>
        </S.Header>
        <S.InsightsWrapper>
          <Grid container spacing={{ md: 10, xs: 5 }}>
            {insights.map((insight, index) => (
              <Grid item key={`${insight.title}-${index}`} xs={12} md={6}>
                <ArticleCard {...insight} isRelatedInsights type="insight" />
              </Grid>
            ))}
          </Grid>
        </S.InsightsWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default RelatedInsights
