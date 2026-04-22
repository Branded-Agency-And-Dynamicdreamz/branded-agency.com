import { graphql } from "gatsby"

export const query = graphql`
  fragment ClientsSlider on WpPage_Pagebuilder_Layouts_ClientsSlider {
    title
    clients {
      icon {
        altText
        title
        sourceUrl
      }
    }
    button {
      title
      url
      target
    }
    fieldGroupName
  }
`
