import { graphql } from "gatsby"

export const query = graphql`
  fragment SecondHeroImage on WpPage_Pagebuilder_Layouts_SecondHeroImage {
    img {
      altText
      title
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    title
    button {
      title
      url
      target
    }
    desktopVideo
    mobileVideo
    fieldGroupName
  }
`
