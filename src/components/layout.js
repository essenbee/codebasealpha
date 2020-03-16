import React from 'react'
import Header from './header'
import Footer from './footer'
import SEO from './seo'

const Layout = (props) => {
    return (
        <div>
            <SEO />
            <Header />
            {props.children}
            <br />
            <Footer />
        </div>
    )
}

export default Layout