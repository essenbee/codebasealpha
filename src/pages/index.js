import React from 'react'
import { Container } from 'semantic-ui-react'
import Layout from '../components/layout'
import Projects from '../components/projects'

const IndexPage = () => (
  <Layout>
      <Container>
          <br />
          <h2>
          <span role="img" aria-label="Waving hand emoji">
              👋
          </span>{' '}
          Hello from Codebase Alpha!
          </h2>
          <Projects />
      </Container>
  </Layout>
)

export default IndexPage
