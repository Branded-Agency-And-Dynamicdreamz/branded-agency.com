import { graphql } from "gatsby"

export const query = graphql`
  fragment DownloadGuide on WpInsight_Insightbuilder_Layouts_DownloadGuide {
    fieldGroupName
    buttonText
    guideFile {
      mediaItemUrl
      localFile {
        publicURL
      }
    }
    formId
    popupText
    text
    alternativeDesign
    customContent
    customPopupContent
    pdfName
    conversionType
    popupImg {
      altText
      title
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    leftImg {
      altText
      title
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    rightImg {
      altText
      title
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`
