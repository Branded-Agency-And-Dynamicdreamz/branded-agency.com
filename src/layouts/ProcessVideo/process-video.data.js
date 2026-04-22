import { graphql } from "gatsby"

export const query = graphql`
  fragment ProcessVideo on WpPage_Pagebuilder_Layouts_ProcessVideo {
    title
    description
    content
    thumbnail {
      altText
      title
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
      publicUrl
    }
    videoLink
    link {
      url
      title
      target
    }
    fieldGroupName
  }
`
