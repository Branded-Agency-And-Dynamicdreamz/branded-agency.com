import { graphql } from "gatsby"

export const query = graphql`
  fragment HeroMobileLanding on WpPage_Pagebuilder_Layouts_HeroMobileLanding {
    title
    description
    button {
      title
      url
    }
    bgImage {
      altText
      title
      sourceUrl
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    fieldGroupName
  }
`
