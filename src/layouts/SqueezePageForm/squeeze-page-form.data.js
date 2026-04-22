import { graphql } from "gatsby"

export const query = graphql`
  fragment SqueezePageForm on WpPage_Pagebuilder_Layouts_SqueezePageForm {
    title
    subtitle
    itemsTitle
    items {
      item
    }
    guideFile {
      mediaItemUrl
      localFile {
        publicURL
      }
    }
    wpFormId
    pdfName
    fieldGroupName
  }
`
