import { graphql } from "gatsby"

export const query = graphql`
  fragment BeforeAfter on WpPage_Pagebuilder_Layouts_BeforeAfter {
    fieldGroupName
    heading
    description
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
    beforeLabel
    afterLabel
    showSlider
    dividerColor
  }
`