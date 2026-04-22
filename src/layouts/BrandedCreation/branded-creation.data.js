import { graphql } from "gatsby"

export const query = graphql`
  fragment BrandedCreation on WpPage_Pagebuilder_Layouts_BrandedCreation {
    title
    firstText
    imgDesktop {
      altText
      title
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    imgMobile {
      altText
      title
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    secondText
    button {
      title
      url
      target
    }
    fieldGroupName
  }
`
