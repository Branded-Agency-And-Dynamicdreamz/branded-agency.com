const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
/**
 * This is the export which Gatbsy will use to process.
 *
 * @param { actions, graphql }
 * @returns {Promise<void>}
 */
module.exports = async ({ actions, graphql, reporter }, options) => {
  const { createPage } = actions
  // query content for WordPress posts
  const {
    data: {
      allWpCaseStudy: { nodes: allCaseStudies },
    },
  } = await graphql(`
    query {
      allWpCaseStudy {
        nodes {
          title
          id
          date(formatString: "DD MMMM YYYY")
          content
          slug
          featuredImage {
            node {
              altText
              sourceUrl
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, quality: 100)
                }
              }
            }
          }
        }
      }
    }
  `)
  const caseStudyTemplate = path.resolve(
    `./src/templates/case-study/case-study.template.jsx`,
  )
  allCaseStudies.forEach(caseStudy => {
    const path = `case-study/${caseStudy.slug}`
    createPage({
      // will be the url for the page
      path: path,
      // specify the component template of your choice
      component: slash(caseStudyTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: caseStudy.id,
      },
    })
    reporter.info(`caseStudy created:  ${path}`)
  })

  reporter.info(`# -----> CASE STUDIES TOTAL: ${allCaseStudies.length}`)
}