import React from "react"
import * as S from "./insights-hero.styles"
import { isBrowser } from "../../utils/utils"
import { graphql, useStaticQuery } from "gatsby"
import Container from "@mui/material/Container"
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
          uri
          content
          date
          language {
            code
          }
          translations {
            uri
            language {
              code
            }
          }
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

  const getCurrentLanguage = () => {
    if (typeof window === "undefined") return "EN"
    const pathname = window.location.pathname
    if (pathname === "/es/" || pathname.startsWith("/es/")) return "ES"
    return "EN"
  }

  const currentLanguage = getCurrentLanguage()
  const filteredInsights = staticQuery.allWpInsight.nodes.filter(insight => {
    const insightLanguage = insight?.language?.code || "EN"
    
    if (currentLanguage === "EN") {
      return insightLanguage === "EN"
    } 
    else {
      return insightLanguage === "ES"
    }
  })

  const groupInsightsByTag = array => {
    return array.reduce((result, item) => {
      let key = item?.insightBuilder?.["tag"] || "Uncategorized"

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

  const insights = groupInsightsByTag(filteredInsights)

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
      </S.Section>
    </>
  )
}

export default InsightsHero