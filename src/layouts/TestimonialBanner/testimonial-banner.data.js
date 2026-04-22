import { graphql } from "gatsby"

export const query = graphql`
  fragment TestimonialBanner on WpPage_Pagebuilder_Layouts_TestimonialBanner {
    title
    content
    testimonials {
      image {
        altText
        title
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      testimonial
      author
      occupation
    }
    fieldGroupName
  }
`
