const { createFilePath } = require('gatsby-source-filesystem')
const path = require(`path`)

// Create permalink nodes in GraphQL...
exports.onCreateNode = ({ node, getNode, actions }) => {
    if (node.internal.type === 'MarkdownRemark') {
        const { createNodeField } = actions;
        const permalink = createFilePath( { node, getNode, basePath: 'posts' } );
        createNodeField( {
            node,
            name: 'permalink',
            value: permalink
        });
    }
  }

  // Create blog post pages programmatically at build time...
  exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve('./src/templates/posting.js')

    return graphql(`
      query loadPagesQuery ($limit: Int!) {
        allMarkdownRemark(limit: $limit) {
          edges {
            node {
              fields {
                permalink
              }
            }
          }
        }
      }
    `, { limit: 1000 }).then(result => {
      if (result.errors) {
        throw result.errors
      }
  
      // Create blog post pages.
      result.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
            path: `${edge.node.fields.permalink}`,
            component: blogPostTemplate,
            context: {
                permalink: edge.node.fields.permalink,
            },
        })
      })
    })
  }