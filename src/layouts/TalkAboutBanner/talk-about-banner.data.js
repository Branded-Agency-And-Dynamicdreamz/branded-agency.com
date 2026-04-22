import { graphql } from "gatsby"

export const query = graphql`
  fragment TalkAboutBanner on WpPage_Pagebuilder_Layouts_TalkAboutBanner {
    title
    description
    secondDescription
    bottomDescription
    fieldGroupName
  }
`
