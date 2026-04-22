import { graphql } from "gatsby"

export const query = graphql`
  fragment LandingCarousel on WpPage_Pagebuilder_Layouts_LandingCarousel {
    items {
      title
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
      imageMobile {
        altText
        title
        sourceUrl
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      description
    }
    fieldGroupName
  }
`
