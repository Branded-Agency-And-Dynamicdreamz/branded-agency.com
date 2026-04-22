import { graphql } from "gatsby"

export const query = graphql`
  fragment SummarySubItems on WpPage_Pagebuilder_Layouts_SummarySubItems {
    topText
    items {
      icon {
        altText
        title
        sourceUrl
      }
      title
      text
      link {
        url
        target
        title
      }
    }
    fieldGroupName
  }
`
