import React from 'react'
import avatar from "../../static/avatarcode.jpg"

const BlogPost = (props) => (
    <div>
        <article className="ui horizontal raised link card" key={props.id}>
            <div className="content">
                <div className="header"><i className="quote left icon" /> {props.title}</div>
                <div className="meta">{props.date}</div>
                <div className="description">{props.excerpt}</div>
                
                <div className="extra content">
                    <div className="right floated author">
                        <img className="ui avatar image" src={avatar} /> Essenbee
                    </div>
                </div>

            </div>
        </article>
    </div>
)

export default BlogPost