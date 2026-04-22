import { graphql } from "gatsby"

export const query = graphql`
  fragment ContentList on WpPage_Pagebuilder_Layouts_ContentList {
    fieldGroupName
    bottomVideo
    grids {
      title
      items {
        item
      }
    }
  }
`
