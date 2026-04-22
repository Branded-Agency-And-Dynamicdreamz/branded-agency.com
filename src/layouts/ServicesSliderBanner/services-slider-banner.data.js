import { graphql } from "gatsby"

export const query = graphql`
  fragment ServicesSliderBanner on WpPage_Pagebuilder_Layouts_ServicesSliderBanner {
    title
    button {
      title
      url
      target
    }
    services {
      text
      image {
        altText
        title
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    fieldGroupName
  }
`
