import { graphql } from "gatsby"

export const query = graphql`
  fragment Testimonial on WpCaseStudy_Casestudybuilder_Layouts_Testimonial {
    fieldGroupName
    testimonial
    author
    jobTitle
    showAnimation
  }
`
