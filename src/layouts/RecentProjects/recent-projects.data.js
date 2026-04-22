import { graphql } from "gatsby"

export const query = graphql`
  fragment RecentProjects on WpPage_Pagebuilder_Layouts_RecentProjects {
    title
    caseStudies {
      caseStudy {
        ... on WpCaseStudy {
          id
          slug
          title
          uri
          featuredImage {
            node {
              title
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          caseStudyBuilder {
            subtitle
          }
        }
      }
      image {
        altText
        title
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      description
    }
    fieldGroupName
  }
`
