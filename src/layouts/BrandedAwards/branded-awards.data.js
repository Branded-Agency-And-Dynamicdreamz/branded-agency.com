import { graphql } from "gatsby"

export const query = graphql`
  fragment BrandedAwards on WpPage_Pagebuilder_Layouts_BrandedAwards {
    title
    description
    number
    awardsText
    fieldGroupName
  }
`
