import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "semantic-ui-react"

const Projects = () => {
    const {github: {
            viewer: {
                repositories: {edges}
            }
        }
    } = useStaticQuery(graphql`query GithubQuery {
    github {
        viewer {
          repositories(isFork: false, first: 50, orderBy: {field: STARGAZERS, direction: DESC}, privacy: PUBLIC) {
            edges {
              node {
                description
                name
                url
                stargazers(orderBy: {field: STARRED_AT, direction: ASC}) {
                  totalCount
                }
                forkCount
                languages(first: 10) {
                  edges {
                    node {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`)
    return (
        <div>
            <Container>
                <h2>Projects on Github</h2>
                <div className="ui cards">
                    {edges.map(( { node }) =>
                    (
                        <div className="ui card">
                            <div className="content">
                                <div className="header">
                                    {node.name}
                                </div>
                                <div className="description">
                                    {node.description}
                                </div>
                                <div className="extra content">
                                    <a href={node.url} target="_blank" rel="noopener noreferrer">{node.url}</a>
                                    <div>
                                        <span>Stars: {node.stargazers.totalCount}</span>{" "}
                                        <span>Forks: {node.forkCount}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </Container>
        </div>
    )
}

export default Projects