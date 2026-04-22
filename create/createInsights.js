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
      allWpInsight: { nodes: allInsights },
    },
  } = await graphql(`
    query {
      allWpInsight {
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
  const insightTemplate = path.resolve(
    `./src/templates/insight/insight.template.jsx`,
  )
  allInsights.forEach(insight => {
    const path = `insight/${insight.slug}`
    createPage({
      // will be the url for the page
      path: path,
      // specify the component template of your choice
      component: slash(insightTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: insight.id,
      },
    })
    reporter.info(`insight created:  ${path}`)
  })

  reporter.info(`# -----> INSIGHTS TOTAL: ${allInsights.length}`)
}
