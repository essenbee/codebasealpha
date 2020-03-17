import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <br />
            <Footer />
        </div>
    )
}

export default Layout