import { graphql } from "gatsby"

export const query = graphql`
  fragment GridContentMedia on WpCaseStudy_Casestudybuilder_Layouts_GridContentMedia {
    fieldGroupName
    noPaddings
    sections {
      mediaType
      gridItemSize
      image {
        title
        mediaItemUrl
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      thumbnail {
        publicUrl
      }
      vimeoLink
      gridItems {
        image {
          title
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        thumbnail {
          publicUrl
        }
        vimeoLink
        size
      }
    }
  }
`
