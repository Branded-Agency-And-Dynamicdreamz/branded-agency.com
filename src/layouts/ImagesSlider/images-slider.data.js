import { graphql } from "gatsby"

export const query = graphql`
  fragment ImagesSlider on WpInsight_Insightbuilder_Layouts_ImagesSlider {
    fieldGroupName
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
    withoutArrows
    caption
    autoplay
    slidesDesktop
    slidesTablet
    slidesMobile
    spaceBetween
  }

  fragment ImagesSliderCS on WpCaseStudy_Casestudybuilder_Layouts_ImagesSlider {
    fieldGroupName
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
    enableMaxHeight
    withoutArrows
    fullWidth
    fullHeight
    autoplay
    delay
    isContinuousMove
  }
`
