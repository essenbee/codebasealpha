import React from "react"
import { Container } from "semantic-ui-react"

const Social = () => (
    <div>
        <h4>Get in touch through any of these channels</h4>
        <div className="ui buttons">
            <a className="ui icon button" target="_blank" rel="noopener noreferrer"
                data-tooltip="My Twitter" data-position="bottom center">
                <i className="twitter big icon"/>
            </a>
            <a className="ui icon button" target="_blank" rel="noopener noreferrer"
                data-tooltip="My LinkedIn" data-position="bottom center">
                <i className="linkedin big icon"/>
            </a>
            <a className="ui icon button" target="_blank" rel="noopener noreferrer"
             data-tooltip="My Youtube Channel" data-position="bottom center">
                <i className="youtube big icon"/>
            </a>
            <a className="ui icon button" target="_blank" rel="noopener noreferrer"
                data-tooltip="My Twitch Channel" data-position="bottom center">
                <i className="twitch big icon"/>
            </a>
            <a className="ui icon button" target="_blank" rel="noopener noreferrer"
                data-tooltip="My Discord" data-position="bottom center">
                <i className="discord big icon"/>
            </a>
        </div>
    </div>
)

export default Social