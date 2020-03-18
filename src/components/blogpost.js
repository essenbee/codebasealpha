import React from 'react'
import { Link } from 'gatsby'
import stu from "../../static/stu.jpg"

const BlogPost = (props) => (
    <div>
        <Link to={props.to}>
            <article className="ui horizontal raised link card">
                <div className="image">
                    <img src={'https://source.unsplash.com/150x150/?' + props.tags.toString()} alt={props.tags} />
                </div>
                <div className="content">
                    <div className="header"><i className="quote left icon" /> {props.title}</div>
                    <div className="meta">{props.date}</div>
                    <div className="description">{props.excerpt}</div>
                    
                    <div className="extra content">
                        <div className="right floated author">
                            <img className="ui avatar image" src={stu} alt="Essenbee"/> Essenbee
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    </div>
)

export default BlogPost