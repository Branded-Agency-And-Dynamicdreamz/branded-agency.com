import { graphql } from "gatsby"

export const query = graphql`
  fragment OurLocations on WpPage_Pagebuilder_Layouts_OurLocations {
    topImages {
      image {
        altText
        title
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
        mediaItemUrl
      }
    }
    locations {
      country
      address
      phone
    }
    fieldGroupName
  }
`
