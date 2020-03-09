import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'semantic-ui-react'
import Layout from '../components/layout'

export default ( { data }) => {
    const posting = data.markdownRemark;

    return (
        <Layout>
            <Container>
                <h1 className="ui header">{posting.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{__html: posting.html}}>

                </div>
            </Container>
        </Layout>
    )
}

export const query = graphql`query($permalink: String!) {
    markdownRemark(fields: { permalink: { eq: $permalink } }) {
      html
      frontmatter {
        title
        tags
        date
      }
    }
  }`
