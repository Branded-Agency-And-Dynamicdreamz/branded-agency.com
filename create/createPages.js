path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

/**
 * Gatsby createPages API
 */

module.exports = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // Fetch all WordPress pages
  const result = await graphql(`
    query {
      allWpPage {
        nodes {
          id
          uri
          isFrontPage

          language {
            code
          }

          translations {
            uri

            language {
              code
            }
          }
        }
      }
    }
  `)

  // GraphQL error handling
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query`)
    return
  }

  const allPages = result.data.allWpPage.nodes

  // Template path
  const pageTemplate = path.resolve(
    `./src/templates/page/page.template.jsx`
  )

  // Create pages
  allPages.forEach(page => {
    let pagePath = page.uri

    // Remove duplicate slashes
    pagePath = pagePath.replace(/\/\/+/g, "/")

    // Ignore hardcoded pages
    if (pagePath === "/layouts/") return

    // Front page handling
    // Polylang already controls multilingual URIs
    if (page.isFrontPage && pagePath !== "/") {
      pagePath = page.uri
    }

    createPage({
      path: pagePath,

      component: slash(pageTemplate),

      context: {
        id: page.id,

        language: page.language?.code || "EN",

        translations: page.translations || [],
      },
    })

    reporter.info(
      `[Page Created] ${page.language?.code || "EN"} -> ${pagePath}`
    )
  })

  reporter.info(`# -----> PAGES TOTAL: ${allPages.length}`)
}