import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "semantic-ui-react"
import fork from "../../static/fork.svg"

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
                homepageUrl
                stargazers(orderBy: {field: STARRED_AT, direction: ASC}) {
                  totalCount
                }
                forkCount
                languages(first: 3) {
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
                <div className="ui four stackable raised cards">
                    {edges.map(( { node }) =>
                    (
                        <div className="ui link card">
                            <div className="content">
                                <div className="header">
                                    <i className="project diagram icon"/> {node.name}
                                </div>
                                <div className="ui divider" />
                                <div className="meta">
                                  <a href={node.url} target="_blank" rel="noopener noreferrer"><i className="github large icon"/> Open Repo</a>
                                </div>
                                <div className="extra content">
                                    <div className="left floated"><i className="star icon" /> 
                                      <span className="ui circular label">{node.stargazers.totalCount}</span>
                                    </div>
                                    <div className="right floated"><img src={fork} alt="Fork icon"/>{' '}
                                      <span className="ui circular label">{node.forkCount}</span>
                                    </div>
                                </div>
                                <div className="ui sub header">
                                  Description
                                </div>
                                <div className="description">
                                    {node.description}
                                </div>
                                <div>
                                  {node.languages.edges.map( ( { node } ) => 
                                    <span className="ui tiny tag label">{node.name}</span>
                                  ) }
                                </div>
                            </div>
                            {node.homepageUrl !== ""
                              ? <div>
                                <a className = "ui bottom attached button" href={node.homepageUrl} target="_blank" rel="noopener noreferrer">
                                  <i className="youtube big icon"/>Playlist
                                </a>
                              </div>
                              : ""
                            }
                        </div>
                    )
                    )}
                </div>
            </Container>
        </div>
    )
}

export default Projects