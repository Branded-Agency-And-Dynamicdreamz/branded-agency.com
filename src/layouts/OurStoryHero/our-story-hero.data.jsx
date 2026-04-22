import { graphql } from "gatsby"

export const query = graphql`
  fragment OurStoryHero on WpPage_Pagebuilder_Layouts_OurStoryHero {
    title
    description
    contentOne
    vimeoLink
    autoplay
    controls
    contentTwo
    fieldGroupName
  }
`
