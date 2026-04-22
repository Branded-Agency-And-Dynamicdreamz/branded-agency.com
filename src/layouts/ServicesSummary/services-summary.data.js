import { graphql } from "gatsby"

export const query = graphql`
  fragment ServicesSummary on WpPage_Pagebuilder_Layouts_ServicesSummary {
    services {
      imgAnimation
      image {
        altText
        title
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      title
      text
      button {
        url
        title
        target
      }
    }
    fieldGroupName
  }
`
