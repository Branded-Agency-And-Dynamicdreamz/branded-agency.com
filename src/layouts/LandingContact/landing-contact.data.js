import { graphql } from "gatsby"

export const query = graphql`
  fragment LandingContact on WpPage_Pagebuilder_Layouts_LandingContact {
    title
    content
    fieldGroupName
  }
`
