import { graphql } from "gatsby"

export const query = graphql`
  fragment WhatDoesMean on WpPage_Pagebuilder_Layouts_WhatDoesMean {
    title
    description
    image {
      altText
      title
      sourceUrl
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    fieldGroupName
  }
`
