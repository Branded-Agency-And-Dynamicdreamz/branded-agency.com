import { graphql } from "gatsby"

export const query = graphql`
  fragment GridContentMediaPage on WpPage_Pagebuilder_Layouts_GridContentMedia {
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
      beforeImage {
        title
        mediaItemUrl
        sourceUrl
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      afterImage {
        title
        mediaItemUrl
        sourceUrl
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      # ❌ showSlider hata diya
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