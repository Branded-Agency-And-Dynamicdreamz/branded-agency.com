import { graphql } from "gatsby"

export const query = graphql`
  fragment SliderHero on WpPage_Pagebuilder_Layouts_Sliderhero {
    fieldGroupName
    slides {
      image {
        title
        mediaItemUrl
        sourceUrl
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      overlayImage {
        title
        mediaItemUrl
        sourceUrl
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      heading
      description
    }
  }
`