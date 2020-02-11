import React from 'react'
import { Container } from 'semantic-ui-react'
import styles from './footer.module.scss'

const Footer = () => (
    <div className={styles.footer}>
        <footer className="ui vertical inverted footer segment">
            <Container>
                Built with <a href="https://gatsbyjs.org" target="_blank" rel="noopener noreferrer">GatsbyJS</a>
                 and <a href="https://fomantic-ui.com" target="_blank"  rel="noopener noreferrer">Fomantic UI</a> by Essenbee 2020
            </Container>
        </footer>
  </div>
)

export default Footer