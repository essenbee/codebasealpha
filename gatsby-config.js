/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {

  siteMetadata: {
    title: 'CodebaseAlpha.dev',
  },

  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `files`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `bearer ${process.env.GATSBY_GITHUB_TOKEN}`,
        },
        fetchOptions: {},
      },
    },
  ]
}
