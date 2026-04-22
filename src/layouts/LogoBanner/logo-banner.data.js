import { graphql } from "gatsby"

export const query = graphql`
  fragment LogoBanner on WpPage_Pagebuilder_Layouts_LogoBanner {
    text
    button {
      url
      title
      target
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
    fieldGroupName
  }
`
