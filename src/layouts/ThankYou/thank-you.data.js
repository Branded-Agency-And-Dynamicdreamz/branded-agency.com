import { graphql } from "gatsby"

export const query = graphql`
  fragment ThankYou on WpPage_Pagebuilder_Layouts_ThankYou {
    title
    description
    icon {
      altText
      title
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    withPixel
    fieldGroupName
  }
`
