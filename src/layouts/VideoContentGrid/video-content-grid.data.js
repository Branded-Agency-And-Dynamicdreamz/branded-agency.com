import { graphql } from "gatsby"

export const query = graphql`
  fragment VideoContentGrid on WpPage_Pagebuilder_Layouts_VideoContentGrid {
    fieldGroupName
    description
    title
    items {
      videoItem {
        iframeVideo
        video {
          mediaItemUrl
        }
        autoplay
        controls
        vimeoLink
      }
      title
      content
    }
    services {
      service
    }
  }
`
