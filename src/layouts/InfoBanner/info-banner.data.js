import { graphql } from "gatsby"

export const query = graphql`
  fragment InfoBanner on WpPage_Pagebuilder_Layouts_InfoBanner {
    title
    text
    button {
      title
      url
      target
    }
    fieldGroupName
  }
`
