import { graphql } from "gatsby"

export const query = graphql`
  fragment CountUpGrid on WpCaseStudy_Casestudybuilder_Layouts_CountUpGrid {
    fieldGroupName
    items {
      number
      description
      disableCount
      isPercentage
      className
    }
  }
`
