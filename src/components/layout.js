import React from 'react'
import Header from './header'
import Footer from './footer'
import '../fomantic/dist/semantic.css'

const Layout = (props) => {
    return (
        <div>
            <Header siteTitle="CodebaseAlpha.dev" />
            {props.children}
            <Footer></Footer>
        </div>
    )
}

export default Layout