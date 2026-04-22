import { graphql } from "gatsby"

export const query = graphql`
  fragment GetInTouch on WpPage_Pagebuilder_Layouts_GetInTouch {
    text
    button {
      url
      title
      target
    }

    fieldGroupName
  }
`
