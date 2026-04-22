import { graphql } from "gatsby"

export const query = graphql`
  fragment JoinUsBanner on WpPage_Pagebuilder_Layouts_JoinUsBanner {
    title
    description
    buttonLink {
      url
      target
      title
    }
    bgImage {
      altText
      title
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    fieldGroupName
  }
`
