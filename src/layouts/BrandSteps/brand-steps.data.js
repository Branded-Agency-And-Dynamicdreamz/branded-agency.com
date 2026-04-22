import { graphql } from "gatsby"

export const query = graphql`
  fragment BrandSteps on WpPage_Pagebuilder_Layouts_BrandSteps {
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
      title
      text

      button {
        title
        url
        target
      }
      id
    }
    fieldGroupName
  }
`
