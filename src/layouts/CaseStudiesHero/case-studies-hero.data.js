import { graphql } from "gatsby"

export const query = graphql`
  fragment CaseStudiesHero on WpPage_Pagebuilder_Layouts_CaseStudiesHero {
    fieldGroupName
    testimonials {
      author
      title
      comment
    }
  }
`
