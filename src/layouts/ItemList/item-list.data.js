import { graphql } from "gatsby"

export const query = graphql`
  fragment ItemList on WpInsight_Insightbuilder_Layouts_ItemList {
    fieldGroupName
    isWhite
    items {
      item
    }
  }
`
