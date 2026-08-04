import { graphql } from "gatsby"

export const query = graphql`
  fragment TextHero on WpPage_Pagebuilder_Layouts_Texthero {
    fieldGroupName
    heading
    description
  }
`