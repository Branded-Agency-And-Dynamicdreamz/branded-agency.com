import { graphql } from "gatsby"

export const query = graphql`
  fragment BgVideoBanner on WpPage_Pagebuilder_Layouts_BgVideoBanner {
    topText
    title
    button {
      title
      url
      target
    }
    bgVideo
    bgImage {
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
