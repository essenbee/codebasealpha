import React from 'react'
import { Container } from 'semantic-ui-react'
import Layout from '../components/layout'

const NotFound = () => (
    <Layout>
        <Container>
            <h2><span role="img" aria-label="Forbidden sign">🚫</span>Page not found</h2>
            <p>
                I'm afraid the route you have requested does not exist. Click on the logo to return Home.
            </p>
        </Container>
    </Layout>
)

export default NotFound