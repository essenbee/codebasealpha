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
    sitename: 'codebasealpha.dev',
    titleTemplate: '%s - Portfolio Website',
    description: 'Portfolio website for Stu Bonham (aka Essenbee), owner of the Codebase Alpha live-coding channel on Twitch.',
    siteUrl: 'https://codebasealpha.dev',
    avatar: '/avatarcode.jpg',
    twitterUsername: '@codebasealpha',
    siteLanguage: 'en-GB',
    author: 'essenbee',
  },

  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-advanced-sitemap',
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
