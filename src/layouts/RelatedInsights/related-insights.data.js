import { graphql } from "gatsby"

export const query = graphql`
  fragment RelatedInsights on WpInsight_Insightbuilder_Layouts_RelatedInsights {
    fieldGroupName
    title
    insights {
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
      }
    }
  }
`
