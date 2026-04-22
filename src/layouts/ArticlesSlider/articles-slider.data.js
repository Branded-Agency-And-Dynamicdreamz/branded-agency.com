import { graphql } from "gatsby"

export const query = graphql`
  fragment ArticlesSlider on WpCaseStudy_Casestudybuilder_Layouts_ArticlesSlider {
    fieldGroupName
    title
    articles {
      article {
        ... on WpCaseStudy {
          id
          slug
          title
          caseStudyBuilder {
            subtitle
          }
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
        }
      }
    }
  }

  fragment ArticlesSliderPage on WpPage_Pagebuilder_Layouts_ArticlesSliderPage {
    fieldGroupName
    title
    isWhite
    articles {
      article {
        ... on WpCaseStudy {
          id
          slug
          title
          caseStudyBuilder {
            subtitle
          }
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
        }
      }
    }
  }

  fragment ArticlesSliderInsight on WpInsight_Insightbuilder_Layouts_ArticlesSlider {
    fieldGroupName
    title
    articles {
      article {
        ... on WpInsight {
          id
          slug
          title
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
        }
      }
    }
  }
`
