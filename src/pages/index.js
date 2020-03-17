import React from 'react'
import { Container } from 'semantic-ui-react'
import Layout from '../components/layout'
import Projects from '../components/projects'
import Intro from '../components/intro'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO />
      <Container>
          <br />
          <Intro />
          <br />
          <Projects />
      </Container>
  </Layout>
)

export default IndexPage
