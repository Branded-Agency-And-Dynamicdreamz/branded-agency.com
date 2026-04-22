import { graphql } from "gatsby"

export const query = graphql`
  fragment OurValues on WpPage_Pagebuilder_Layouts_OurValues {
    title
    text
    values {
      value
      description
    }
    bottomTitle
    bottomDescription
    fieldGroupName
  }
`
