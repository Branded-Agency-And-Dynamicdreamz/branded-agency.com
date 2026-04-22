import { graphql } from "gatsby"

export const query = graphql`
  fragment ArticleAccordion on WpInsight_Insightbuilder_Layouts_ArticleAccordion {
    fieldGroupName
    title
    items {
      title
      content
    }
  }
`
