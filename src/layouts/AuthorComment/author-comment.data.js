import { graphql } from "gatsby"

export const query = graphql`
  fragment AuthorComment on WpInsight_Insightbuilder_Layouts_AuthorComment {
    fieldGroupName
    comment
    author
    jobPosition
    isSecondStyle
  }
`
