import { graphql } from "gatsby"

export const query = graphql`
  fragment MiscContentInsight on WpInsight_Insightbuilder_Layouts_MiscContentInsight {
    content
    buttonQuizText
    buttons {
      button {
        title
        url
        target
      }
    }
    buttonType
    fieldGroupName
  }
  fragment MiscContentCS on WpCaseStudy_Casestudybuilder_Layouts_MiscContent {
    content
    fullWidth
    fieldGroupName
    showAnimation
  }
`
