import { graphql } from "gatsby"

export const query = graphql`
  fragment CustomHero on WpPage_Pagebuilder_Layouts_CustomHero {
    title
    text
    maxWidth
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
