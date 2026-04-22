import { graphql } from "gatsby"

export const query = graphql`
  fragment BannerText on WpPage_Pagebuilder_Layouts_BannerText {
    title
    description
    button {
      url
      title
      target
    }
    withAnimation
    fieldGroupName
  }
`
