import { graphql } from "gatsby"

export const query = graphql`
  fragment AboutPromise on WpPage_Pagebuilder_Layouts_AboutPromise {
    title
    description
    btnText
    bgImage {
      altText
      title
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
      mediaItemUrl
    }
    images {
      image {
        altText
        title
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      imageMb {
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
