import { graphql } from "gatsby"

export const query = graphql`
  fragment ArticleBulletPointList on WpInsight_Insightbuilder_Layouts_ArticleBulletPointList {
    fieldGroupName
    items {
      item
    }
  }
`
