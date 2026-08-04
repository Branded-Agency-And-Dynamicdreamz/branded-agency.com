import { graphql } from "gatsby"

export const query = graphql`
  fragment HeroBgText on WpPage_Pagebuilder_Layouts_Herobgtext {
    fieldGroupName
    backgroundImage {
      title
      mediaItemUrl
      sourceUrl
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    description
    overlayOpacity
  }
`