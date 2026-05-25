let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)

const dotenv = require("dotenv")
const fs = require("fs")

const envPath = `.env.${activeEnv}`

if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath })
} else {
  dotenv.config({ path: ".env" })
}

console.log(
  `This WordPress Endpoint is used: '${process.env.GATSBY_WORDPRESS_URL}'`,
)

module.exports = {
  siteMetadata: {
    siteUrl: process.env.GATSBY_WEBSITE_URL,
  },
  flags: {},
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: { excludes: [`/404`, `/layouts`] },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: process.env.WEBSITE_URL || process.env.GATSBY_WEBSITE_URL,
        sitemap: `${process.env.GATSBY_WEBSITE_URL}/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `assets`, path: `${__dirname}/src/assets` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `images`, path: `${__dirname}/src/images` },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `none`,
          quality: 80,
        },
        failOn: `none`,
        stripMetadata: true,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Branded`,
        short_name: `Branded`,
        start_url: `/`,
        background_color: `transparent`,
        theme_color: `#1519ba`,
        icon: `src/assets/icons/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `${process.env.GATSBY_WORDPRESS_URL}/graphql`,
        production: { hardCacheMediaFiles: true },
        schema: {
          perPage: 5,
          requestConcurrency: 1,
          previewRequestConcurrency: 1,
          timeout: 300000,
        },
        type: {
          MediaItem: {
            createFileNodes: true,
            localFile: {
              requestConcurrency: 1,
              excludeByMimeTypes: [
                "video/mp4",
                "video/quicktime",
                "video/webm",
                "video/ogg",
              ],
              maxFileSizeBytes: 5242880,
            },
          },
        },
        html: {
          useGatsbyImage: false,
          createStaticFiles: false,
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: { rule: { include: /assets/ } },
    },
  ],
}