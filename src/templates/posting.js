import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'semantic-ui-react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import stu from "../../static/stu.jpg"

export default ( { data }) => {
    const posting = data.markdownRemark;

    return (
        <Layout>
          <SEO title={posting.frontmatter.title} titleTemplate="%s" description={posting.excerpt}
               pathname={posting.fields.permalink} isArticle="true" />
            <Container>
              <br />
              <h1 className="ui header"><i className="quote left icon" /> {posting.frontmatter.title}</h1>
              <div>
                <h3 className="ui date">{posting.frontmatter.date}{'  '}<img className="ui avatar image" src={stu} alt="Essenbee"/> Essenbee</h3>
              </div>
              <br />
              <div>
                <img className="ui small left floated image" src={'https://source.unsplash.com/550x550?' + posting.frontmatter.tags.toString()} alt={posting.frontmatter.tags} />
                <div dangerouslySetInnerHTML={{__html: posting.html}}></div>
              </div>
              <br />
            </Container>
        </Layout>
    )
}

export const query = graphql`query($permalink: String!) {
    markdownRemark(fields: { permalink: { eq: $permalink } }) {
      html
      excerpt
      frontmatter {
        title
        tags
        date(formatString: "DD MMMM YYYY")
      }
      fields {
        permalink
      }
    }
  }`
