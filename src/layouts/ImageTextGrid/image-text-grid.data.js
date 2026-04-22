import { graphql } from "gatsby"

export const query = graphql`
  fragment ImageTextGrid on WpInsight_Insightbuilder_Layouts_ImageTextGrid {
    fieldGroupName
    items {
      image {
        altText
        title
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      text
    }
  }
`
