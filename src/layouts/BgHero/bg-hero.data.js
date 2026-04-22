import { graphql } from "gatsby"

export const query = graphql`
  fragment BgHero on WpPage_Pagebuilder_Layouts_BgHero {
    image {
      altText
      title
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    fieldGroupName
  }
`
