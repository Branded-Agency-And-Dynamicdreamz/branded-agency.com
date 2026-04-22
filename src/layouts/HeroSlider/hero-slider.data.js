import { graphql } from "gatsby"

export const query = graphql`
  fragment HeroSlider on WpPage_Pagebuilder_Layouts_HeroSlider {
    slides {
      title
      subtitle
      text
      nextId {
        id
        title
      }
      button {
        url
        title
        target
      }
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
