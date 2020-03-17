import React from 'react'
import { Container } from 'semantic-ui-react'
import Layout from '../components/layout'
import BlogPosts from '../components/blogposts'
import SEO from '../components/seo'

const Blog = () => (
  <Layout>
    <SEO title="Codebase Alpha Blog" pathname="/blog" />
      <Container>
          <br />
            <BlogPosts />
      </Container>
  </Layout>
)

export default Blog