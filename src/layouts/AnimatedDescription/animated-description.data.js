import { graphql } from "gatsby"

export const query = graphql`
  fragment AnimatedDescription on WpPage_Pagebuilder_Layouts_AnimatedDescription {
    title
    content
    fieldGroupName
  }
`
