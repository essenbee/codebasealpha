import React from 'react'
import { Container } from 'semantic-ui-react'
import Layout from '../components/layout'

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
      </Container>
  </Layout>
)

export default IndexPage
