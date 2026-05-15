const fs = require("fs")
const path = require(`path`)
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

  const translationsMap = {}

  allPages.forEach(page => {
    let currentUri = page.uri

    // Front page handling for translations map
    if (page.isFrontPage) {
      if (page.language?.code === "EN") {
        currentUri = "/"
      } else {
        currentUri = `/${page.language.code.toLowerCase()}/`
      }
    }

    const defaultUri =
      page.language?.code === "EN"
        ? currentUri
        : page.translations?.find(
            t => t.language.code === "EN"
          )?.uri || "/"

    if (!defaultUri) return

    if (!translationsMap[defaultUri]) {
      translationsMap[defaultUri] = {}
    }

    translationsMap[defaultUri][
      page.language.code
    ] = currentUri

    page.translations?.forEach(t => {
      let translatedUri = t.uri

      // Handle translated homepage URIs
      if (
        t.uri === "/" &&
        page.language?.code !== "EN"
      ) {
        translatedUri = `/${page.language.code.toLowerCase()}/`
      }

      translationsMap[defaultUri][
        t.language.code
      ] = translatedUri
    })
  })

  const generatedDir = path.resolve(
    "./src/generated"
  )

  if (!fs.existsSync(generatedDir)) {
    fs.mkdirSync(generatedDir)
  }

  fs.writeFileSync(
    path.resolve(
      "./src/generated/translations.json"
    ),
    JSON.stringify(translationsMap, null, 2)
  )

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
    if (page.isFrontPage) {
      if (page.language?.code === "EN") {
        pagePath = "/"
      } else {
        pagePath = `/${page.language.code.toLowerCase()}/`
      }
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