import { graphql } from "gatsby"

export const query = graphql`
  fragment ScrollerContentServices on WpCaseStudy_Casestudybuilder_Layouts_ScrollerContentServices {
    fieldGroupName
    services {
      service
    }
    content
  }
`
