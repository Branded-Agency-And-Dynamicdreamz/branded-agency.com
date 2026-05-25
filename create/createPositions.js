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
      allWpPosition: { nodes: allPositions },
    },
  } = await graphql(`
    query {
      allWpPosition {
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
  const positionTemplate = path.resolve(
    `./src/templates/position/position.template.jsx`,
  )
  allPositions.forEach(position => {
    const path = `join-us/${position.slug}`
    createPage({
      // will be the url for the page
      path: path,
      // specify the component template of your choice
      component: slash(positionTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: position.id,
      },
      // 🔥 DSG: First visit pe generate hoga
      defer: true,
    })
    reporter.info(`[Position DSG] ${path}`)
  })

  reporter.info(`# -----> POSITIONS TOTAL (DSG): ${allPositions.length}`)
}