import { graphql } from "gatsby"

export const query = graphql`
  fragment TypeformEmbed on WpInsight_Insightbuilder_Layouts_TypeformEmbed {
    fieldGroupName
    idForm
  }
`
