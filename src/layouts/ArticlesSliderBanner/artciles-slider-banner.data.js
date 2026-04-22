import { graphql } from "gatsby"

export const query = graphql`
  fragment ArticlesSliderBanner on WpPage_Pagebuilder_Layouts_ArticlesSliderBanner {
    items {
      topText
      bottomText
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
