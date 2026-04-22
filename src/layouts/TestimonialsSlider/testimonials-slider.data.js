import { graphql } from "gatsby"

export const query = graphql`
  fragment TestimonialsSlider on WpPage_Pagebuilder_Layouts_TestimonialsSlider {
    testimonials {
      name
      job
      testimonial
    }
    fieldGroupName
  }
`
