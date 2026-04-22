import { graphql } from "gatsby"

export const query = graphql`
  fragment SideBySide on WpInsight_Insightbuilder_Layouts_SideBySide {
    fieldGroupName
    title
    iframeVideo
    imageOrVideo {
      mediaItemUrl
      sourceUrl
      gatsbyImage(width: 100, height: 100)
    }
    downloadButtonText
    vimeoLink
    content
    spacing
    reverse
    fileStyles {
      name
      value
    }
  }
  fragment SideBySideCS on WpCaseStudy_Casestudybuilder_Layouts_SideBySide {
    fieldGroupName
    iframeVideo
    imageOrVideo {
      mediaItemUrl
      sourceUrl
      gatsbyImage(width: 100, height: 100)
    }
    content
    reverse
    fileStyles {
      name
      value
    }
  }
`
