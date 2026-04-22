import { graphql } from "gatsby"

export const query = graphql`
  fragment TitleBanner on WpPage_Pagebuilder_Layouts_TitleBanner {
    title
    text
    fieldGroupName
  }
`
