import { graphql } from "gatsby"

export const query = graphql`
  fragment AboutHero on WpPage_Pagebuilder_Layouts_AboutHero {
    title
    subtitle
    vimeoLink
    thumbnail {
    publicUrl
      altText
      title
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    bg {
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
