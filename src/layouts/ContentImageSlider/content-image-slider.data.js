import { graphql } from "gatsby"

export const query = graphql`
  fragment ContentImageSlider on WpPage_Pagebuilder_Layouts_ContentImageSlider {
    topText
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
    fieldGroupName
  }
`
