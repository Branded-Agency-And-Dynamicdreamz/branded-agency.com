const fs = require("fs")
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

module.exports = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

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

      # ADDED: Fetch all case studies for page generation
      allWpCaseStudy {
        nodes {
          id
          uri
          slug

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

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query`)
    return
  }

  const allPages = result.data.allWpPage.nodes
  const allCaseStudies = result.data.allWpCaseStudy?.nodes || []

  const translationsMap = {}

  allPages.forEach(page => {
    let currentUri = page.uri

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

  const pageTemplate = path.resolve(
    `./src/templates/page/page.template.jsx`
  )

  const caseStudyTemplate = path.resolve(
    `./src/templates/case-study/case-study.template.jsx`
  )

  allPages.forEach(page => {
    let pagePath = page.uri

    pagePath = pagePath.replace(/\/\/+/g, "/")

    if (pagePath === "/layouts/") return

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

  allCaseStudies.forEach(caseStudy => {
    let pagePath = caseStudy.uri

    pagePath = pagePath.replace(/\/\/+/g, "/")

    createPage({
      path: pagePath,
      component: slash(caseStudyTemplate),
      context: {
        id: caseStudy.id,
        slug: caseStudy.slug,
        language: caseStudy.language?.code || "EN",
        translations: caseStudy.translations || [],
      },
    })

    reporter.info(
      `[Case Study Created] ${caseStudy.language?.code || "EN"} -> ${pagePath}`
    )
  })

  reporter.info(`# -----> PAGES TOTAL: ${allPages.length}`)
  reporter.info(`# -----> CASE STUDIES TOTAL: ${allCaseStudies.length}`)
}