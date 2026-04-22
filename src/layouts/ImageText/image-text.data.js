import { graphql } from "gatsby"

export const query = graphql`
  fragment ImageText on WpPage_Pagebuilder_Layouts_ImageText {
    title
    description
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
