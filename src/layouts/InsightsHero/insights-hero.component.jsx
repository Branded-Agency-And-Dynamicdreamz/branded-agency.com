import React, { useEffect, useState } from "react"
import * as S from "./insights-hero.styles"
import parse from "html-react-parser"
import { Grid, Tab, Tabs } from "@mui/material"
import { isBrowser, textEllipsis } from "../../utils/utils"
import { graphql, useStaticQuery } from "gatsby"
import Container from "@mui/material/Container"
import ArticleCard from "../../components/article-card/article-card.component"
import { Swiper, SwiperSlide } from "swiper/react"
import ArrowSVG from "../../assets/arrow.svg"
import { Navigation } from "swiper/modules"
import InsightArticlesSlider from "../../components/insight-articles-slider/insight-articles-slider.component"
import ArticlesByTab from "../../components/articles-by-tab/articles-by-tab.component"

const ARTICLES_TO_SHOW = 6

const InsightsHero = ({ title, sliderArticles }) => {
  const getText = html => {
    if (!isBrowser) return
    const divContainer = document.createElement("div")
    divContainer.innerHTML = html
    return divContainer.textContent || divContainer.innerText || ""
  }
  const staticQuery = useStaticQuery(graphql`
    query {
      allWpInsight(sort: { date: DESC }) {
        nodes {
          slug
          title
          content
          date
          featuredImage {
            node {
              title
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          insightBuilder {
            tag
            authorInfo {
              name
              image {
                title
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              linkedinLink
              mail
              extraLink
            }
          }
        }
      }
    }
  `)

  const groupInsightsByTag = array => {
    return array.reduce((result, item) => {
      let key = item?.insightBuilder["tag"]

      if (!result["Show All"]) {
        result["Show All"] = [item]
      } else {
        result["Show All"].push(item)
      }

      if (!result[key]) {
        result[key] = [item]
      } else {
        result[key].push(item)
      }
      return result
    }, {})
  }

  const insights = groupInsightsByTag(staticQuery.allWpInsight.nodes)

  return (
    <>
      <InsightArticlesSlider
        sliderArticles={sliderArticles}
        title={title}
        type="insight"
      />
      <S.Section>
        <Container>
          <ArticlesByTab articles={insights} type="insight" />
        </Container>

        {/*<S.Subtitle>{subtitle}</S.Subtitle>*/}
        {/*{description && <S.Description>{parse(description)}</S.Description>}*/}
        {/*{insights?.map((insight, index) => {*/}
        {/*  const description = getText(insight.content)*/}
        {/*  const text = description*/}
        {/*    ? textEllipsis(description, 300, { ellipsis: "[...]" })*/}
        {/*    : ""*/}
        {/*  return (*/}
        {/*    <Grid*/}
        {/*      container*/}
        {/*      direction={{*/}
        {/*        // xs: "column",*/}
        {/*        md: index % 2 === 0 ? "row" : "row-reverse",*/}
        {/*      }}*/}
        {/*      key={`insight-${index}`}*/}
        {/*    >*/}
        {/*      <Grid item xs={12} md={6}>*/}
        {/*        <S.ImageWrapper url={`/insight/${insight.slug}`}>*/}
        {/*          <S.InsightImage*/}
        {/*            img={insight.featuredImage?.node}*/}
        {/*            alt={insight.title}*/}
        {/*            arPaddingPercentage={100}*/}
        {/*          />*/}
        {/*        </S.ImageWrapper>*/}
        {/*      </Grid>*/}
        {/*      <Grid item xs={12} md={6}>*/}
        {/*        <S.TextWrapper>*/}
        {/*          <S.InsightTitle>{insight.title}</S.InsightTitle>*/}
        {/*          {text && <S.InsightDescription>{text}</S.InsightDescription>}*/}
        {/*          <S.StyledLink url={`/insight/${insight.slug}`}>*/}
        {/*            Read more*/}
        {/*          </S.StyledLink>*/}
        {/*        </S.TextWrapper>*/}
        {/*      </Grid>*/}
        {/*    </Grid>*/}
        {/*  )*/}
        {/*})}*/}
      </S.Section>
    </>
  )
}

export default InsightsHero
