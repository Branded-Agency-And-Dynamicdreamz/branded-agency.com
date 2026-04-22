import { graphql } from "gatsby"

export const query = graphql`
  fragment CustomContent on WpPage_Pagebuilder_Layouts_CustomContent {
    title
    content
    fieldGroupName
  }
`
