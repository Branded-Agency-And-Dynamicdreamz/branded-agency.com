import { graphql } from "gatsby"

export const query = graphql`
  fragment InsightsHero on WpPage_Pagebuilder_Layouts_InsightsHero {
    fieldGroupName
    title
    sliderArticles {
      article {
        ... on WpInsight {
          id
          slug
          title
          content
          featuredImage {
            node {
              altText
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
          }
        }
      }
    }
  }
`
