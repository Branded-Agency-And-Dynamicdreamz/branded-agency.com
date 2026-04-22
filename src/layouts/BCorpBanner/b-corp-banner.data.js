import { graphql } from "gatsby"

export const query = graphql`
  fragment BCorpBanner on WpPage_Pagebuilder_Layouts_BCorpBanner {
    bgImage {
      altText
      title
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    logo {
      altText
      title
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    title
    description
    fieldGroupName
  }
`
