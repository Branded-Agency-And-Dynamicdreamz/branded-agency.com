import { graphql } from "gatsby"

export const query = graphql`
  fragment SubContent on WpPage_Pagebuilder_Layouts_SubContent {
    content
    isTransparent
    fieldGroupName
  }
`
