import { graphql } from "gatsby"

export const query = graphql`
  fragment VideoComponent on WpInsight_Insightbuilder_Layouts_VideoComponent {
    fieldGroupName
    iframeVideo
    video {
      mediaItemUrl
    }
    vimeoLink
    autoplay
    controls
    maxWidth
    fullWidth
    threshold
    withBorderRadius
  }
  fragment VideoComponentCS on WpCaseStudy_Casestudybuilder_Layouts_VideoComponent {
    fieldGroupName
    iframeVideo
    subtitle
    vimeoLink
    video {
      mediaItemUrl
    }
    thumbnail {
      publicUrl
    }
    autoplay
    controls
    loop
    pauseOnClick
    fullWidth
    showAnimation
  }

  fragment VideoComponentPage on WpPage_Pagebuilder_Layouts_VideoComponentPage {
    fieldGroupName
    iframeVideo
    vimeoLink
    video {
      mediaItemUrl
    }
    autoplay
    controls
    isTransparent
  }
`
