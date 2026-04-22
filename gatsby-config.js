let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)

const dotenv = require("dotenv")
const fs = require("fs")

const envPath = `.env.${activeEnv}`

if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath })
} else {
  // Fallback to .env when a per-environment file is not present.
  dotenv.config({ path: ".env" })
}

console.log(
  `This WordPress Endpoint is used: '${process.env.GATSBY_WORDPRESS_URL}'`,
)

module.exports = {
  siteMetadata: {
    siteUrl: process.env.GATSBY_WEBSITE_URL,
  },
  flags: {
    // FAST_DEV: true,
    // DEV_SSR: false,
    // FAST_REFRESH: true,
  },
  plugins: [
    // `gatsby-plugin-preact`,
    `gatsby-plugin-netlify`,
    // Make sure this plugin is first in the array of plugins
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "UA-111111111-1",
    //     // this option places the tracking script into the head of the DOM
    //     head: true,
    //     // other options
    //   },
    // },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [`/404`, `/layouts`],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: process.env.WEBSITE_URL || process.env.GATSBY_WEBSITE_URL,
        sitemap: `${process.env.GATSBY_WEBSITE_URL}/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `none`,
          quality: 100,
        },
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
        icon: `src/assets/icons/favicon.png`, // This path is relative to the root of the site.
      },
    },
    /*
     * Gatsby's data processing layer begins with “source”
     * plugins. Here the site sources its data from WordPress.
     */
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `${process.env.GATSBY_WORDPRESS_URL}/graphql`,
        production: {
          hardCacheMediaFiles: true,
        },
        schema: {
          // Conservative settings for smaller concurrent load on WPGraphQL in CI.
          perPage: 10,
          requestConcurrency: 2,
          previewRequestConcurrency: 1,
          timeout: 120000,
        },
        type: {
          MediaItem: {
            // Use direct WordPress media URLs instead of creating local File nodes.
            createFileNodes: false,
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
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
}
