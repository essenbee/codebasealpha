import React from 'react'
import { Container } from 'semantic-ui-react'
import Layout from '../components/layout'
import BlogPosts from '../components/blogposts'

const Blog = () => (
  <Layout>
      <Container>
          <br />
            <BlogPosts />
      </Container>
  </Layout>
)

export default Blog