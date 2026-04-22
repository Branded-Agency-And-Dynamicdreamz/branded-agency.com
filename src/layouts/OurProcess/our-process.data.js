import { graphql } from "gatsby"

export const query = graphql`
  fragment OurProcess on WpPage_Pagebuilder_Layouts_OurProcess {
    title
    description
    thumbnail {
      altText
      title
      publicUrl
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    bgImage {
      altText
      title
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    vimeoLink
    fieldGroupName
  }
`
