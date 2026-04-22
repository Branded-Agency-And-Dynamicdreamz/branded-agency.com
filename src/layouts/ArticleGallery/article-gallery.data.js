import { graphql } from "gatsby"

export const query = graphql`
  fragment ArticleGallery on WpCaseStudy_Casestudybuilder_Layouts_ArticleGallery {
    fieldGroupName
    spacingDesktop
    spacingMobile
    paddingTop
    images {
      image {
        altText
        title
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    swiperInMobile
  }

  fragment ArticleGalleryInsight on WpInsight_Insightbuilder_Layouts_ArticleGallery {
    fieldGroupName
    spacingDesktop
    spacingMobile
    paddingTop
    paddingBottom
    images {
      image {
        altText
        title
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
