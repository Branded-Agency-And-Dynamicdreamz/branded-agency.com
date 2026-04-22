import { graphql } from "gatsby"

export const query = graphql`
  fragment SecondImagesSlider on WpPage_Pagebuilder_Layouts_SecondImagesSlider {
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
