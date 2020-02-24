import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BlogPost from "./blogpost"

const BlogPosts = () => {
    const {allMarkdownRemark: {
        edges }
     } = useStaticQuery(graphql`query GetPosts {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
          edges {
            node {
              id
              excerpt
              frontmatter {
                title
                date(formatString: "DD MMMM YYYY")
                tags
              }
            }
          }
          totalCount
        }
      }
    `)
    return (
        <div>
            <div className="ui cards">
                {edges.map( ( { node } ) =>
                  <BlogPost key={node.id}
                    id={node.id}
                    title={node.frontmatter.title}
                    date={node.frontmatter.date}
                    tags={node.frontmatter.tags}
                    excerpt={node.excerpt}
                  />
                )}
            </div>
        </div>
    )
}

export default BlogPosts