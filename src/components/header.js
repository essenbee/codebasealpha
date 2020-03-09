import React from "react"
import { Link } from "gatsby"
import { Container } from "semantic-ui-react"
import avatar from "../../static/avatarcode.jpg"

const Header = () => (
    <div>
        <header className="ui inverted stackable menu">
            <Container>
                <h1 className="header item">
                    <Link to="/">
                        <span>
                            <img className="ui avatar image" src={avatar} alt="Codebase Alpha logo" />
                            CodebaseAlpha.dev
                        </span>
                    </Link>
                </h1>
                <Link className="right item" to="/blog" >Blog</Link>
                <Link className="item" to="/" >About</Link>
                <Link className="item" to="/contact" >Contact</Link>
            </Container>
        </header>
    </div>
)

export default Header