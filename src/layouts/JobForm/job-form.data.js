import { graphql } from "gatsby"

export const query = graphql`
  fragment JobForm on WpPage_Pagebuilder_Layouts_JobForm {
    title
    formTitle
    fieldGroupName
  }
`
