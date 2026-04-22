import { graphql } from "gatsby"

export const query = graphql`
  fragment Contact on WpPage_Pagebuilder_Layouts_Contact {
    bgImage {
      altText
      title
      sourceUrl
    }
    title
    subtitle
    content
    formTitle
    secondTitle
    secondContent
    locations {
      title
      info {
        location
      }
    }
    fieldGroupName
  }
`
