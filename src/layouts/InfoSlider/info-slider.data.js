import { graphql } from "gatsby"

export const query = graphql`
  fragment InfoSlider on WpPage_Pagebuilder_Layouts_InfoSlider {
    features {
      title
      content
    }
    fieldGroupName
  }
`
