import { graphql } from "gatsby"

export const query = graphql`
  fragment HeroImage on WpPage_Pagebuilder_Layouts_HeroImage {
    image {
      altText
      title
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    title
    fieldGroupName
  }
`
