import { graphql } from "gatsby"

export const query = graphql`
  fragment ReasonBrandsFail on WpPage_Pagebuilder_Layouts_ReasonBrandsFail {
    title
    description
    contentItems {
      contentType
      text
      video
      image {
        altText
        title
        sourceUrl
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    fieldGroupName
  }
`
