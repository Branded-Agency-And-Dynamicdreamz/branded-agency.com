import { graphql } from "gatsby"

export const query = graphql`
  fragment VideoBanner on WpPage_Pagebuilder_Layouts_VideoBanner {
    vimeoLink
    sectionId
    video {
      mediaItemUrl
      sourceUrl
    }
    iframeVideo
    autoplay
    controls
    fieldGroupName
  }
`
