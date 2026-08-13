import { graphql } from "gatsby"

export const query = graphql`
  fragment TestimonialPage on WpPage_Pagebuilder_Layouts_Testimonialpage {
    fieldGroupName
    testimonial
    author
    jobTitle
    showAnimation
  }
`