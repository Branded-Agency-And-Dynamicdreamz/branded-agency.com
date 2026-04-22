import { graphql } from "gatsby"

export const query = graphql`
  fragment SliderValues on WpPage_Pagebuilder_Layouts_SliderValues {
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
    values {
      icon {
        altText
        title
        sourceUrl
      }
      value
      description
    }
    fieldGroupName
  }
`
