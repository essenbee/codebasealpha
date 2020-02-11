import React from "react"
import { Container } from "semantic-ui-react"
import avatar from "../../static/avatarcode.jpg"

const Header = () => (
    <div>
        <header className="ui inverted menu">
            <Container>
                <h1 className="header item">
                    <span>
                        <img className="ui avatar image" src={avatar} alt="Codebase Alpha logo" />
                        CodebaseAlpha.dev
                    </span>
                </h1>
            </Container>
        </header>
    </div>
)

export default Header