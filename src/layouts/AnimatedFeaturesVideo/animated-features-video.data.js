import { graphql } from "gatsby"

export const query = graphql`
  fragment AnimatedFeaturesVideo on WpPage_Pagebuilder_Layouts_AnimatedFeaturesVideo {
    vimeoLink
    title
    services {
      service
      link {
        url
        title
        target
      }
    }
    description
    fieldGroupName
  }
`
