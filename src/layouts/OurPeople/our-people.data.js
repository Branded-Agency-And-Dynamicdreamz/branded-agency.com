import { graphql } from "gatsby"

export const query = graphql`
  fragment OurPeople on WpPage_Pagebuilder_Layouts_OurPeople {
    title
    description
    button {
        url
        title
        target
      }
    bottomImage {
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
