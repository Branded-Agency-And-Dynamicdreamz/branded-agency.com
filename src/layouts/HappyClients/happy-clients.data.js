import { graphql } from "gatsby"

export const query = graphql`
  fragment HappyClients on WpPage_Pagebuilder_Layouts_HappyClients {
    logos {
      logo {
        altText
        title
        sourceUrl
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    text
    button {
      title
      url
      target
    }
    largeStyle
    fieldGroupName
  }
`
