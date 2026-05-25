// Create all pages
const million = require("million/compiler")
const createPages = require("./create/createPages")
const createPosts = require("./create/createPosts")
const createInsights = require("./create/createInsights")
const createCaseStudies = require("./create/createCaseStudies")
const createPositions = require("./create/createPositions")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      million.webpack({
        mode: "react",
        server: true,
        auto: {
          threshold: 0.05,
          skip: ["useBadHook", /badVariable/g],
        },
      }),
    ],
  })
}

exports.createPages = async ({ graphql, actions, reporter }, options) => {
  const { createRedirect } = actions

  const redirects = [
    {
      fromPath: "/es/*",
      toPath: "https://es.branded-agency.com/:splat",
      redirectInBrowser: true,
      isPermanent: true,
    },
  ]

  redirects.map(redirect => {
    createRedirect(redirect)
  })

  await createPages({ actions, graphql, reporter }, options)
  // await createPosts({ actions, graphql, reporter }, options)
  await createInsights({ actions, graphql, reporter }, options)
  await createCaseStudies({ actions, graphql, reporter }, options)
  await createPositions({ actions, graphql, reporter }, options)
}
