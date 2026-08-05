import { graphql } from "gatsby"

export const query = graphql`
  fragment AnimatedDescriptionWithButton on WpPage_Pagebuilder_Layouts_AnimatedDescriptionWithButton {
    fieldGroupName
    title
    content
    targetId
    buttonImage {
      title
      mediaItemUrl
      sourceUrl
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`