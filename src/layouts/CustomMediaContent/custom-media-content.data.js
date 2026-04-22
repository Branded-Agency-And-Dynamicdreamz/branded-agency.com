import { graphql } from "gatsby"

export const query = graphql`
  fragment CustomMediaContent on WpPage_Pagebuilder_Layouts_CustomMediaContent {
    contentOne
    vimeoLink
    autoplay
    controls
    contentTwo
    isLight
    mediaType
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
