import { graphql } from "gatsby"

export const query = graphql`
  fragment DistinctiveSqueezePageForm on WpPage_Pagebuilder_Layouts_DistinctiveSqueezePageForm {
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
