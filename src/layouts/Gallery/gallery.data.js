import { graphql } from "gatsby"

export const query = graphql`
  fragment Gallery on WpPage_Pagebuilder_Layouts_Gallery {
    images {
      image {
        altText
        title
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    sectionId
    fieldGroupName
  }
`
