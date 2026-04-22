import { graphql } from "gatsby"

export const query = graphql`
  fragment BackLinks on WpPage_Pagebuilder_Layouts_BackLinks {
    links {
      link {
        url
        title
        target
      }
    }
    withPaddingTop
    isTransparent
    fieldGroupName
  }
`
