import { graphql } from "gatsby"

export const query = graphql`
  fragment GridContent on WpCaseStudy_Casestudybuilder_Layouts_GridContent {
    fieldGroupName
    className
    subtitle
    items {
      vimeoLink
      iframeVideo
      file {
        mediaItemUrl
        gatsbyImage(width: 100, height: 100)
      }
      paddingPercentage
      onlyContent
      content
      className
    }
  }
`
