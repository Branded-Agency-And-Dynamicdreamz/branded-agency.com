import { graphql } from "gatsby"

export const query = graphql`
  fragment ServicesHero on WpPage_Pagebuilder_Layouts_ServicesHero {
    slides {
      title
      offsetY
      image {
        altText
        title
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      imageMobile {
        altText
        title
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      color
    }
    fieldGroupName
  }
`
