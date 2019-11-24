const dotenv = require("dotenv")

dotenv.config()

module.exports = {
  siteMetadata: {
    title: `Магазин white cat`,
    description: `посуда, ...`,
    author: `@nurbek`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-tinacms",
      options: {
        plugins: ["gatsby-tinacms-git", "gatsby-tinacms-json"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: "data",
      },
    },
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTETFULL_SPACE_ID,
        accessToken: process.env.CONTETFULL_ACCESS_TOKEN,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
