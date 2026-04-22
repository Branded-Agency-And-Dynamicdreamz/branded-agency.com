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
        sourceUrl
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      thumbnail {
        publicUrl
        sourceUrl
      }
      vimeoLink
      gridItems {
        image {
          title
          sourceUrl
          mediaItemUrl
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        thumbnail {
          publicUrl
          sourceUrl
        }
        vimeoLink
        size
      }
    }
  }
`
