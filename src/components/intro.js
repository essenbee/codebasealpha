import React from 'react'
import Social from "./social"

const Intro = () => (
    <div>
        <h2>
          <span role="img" aria-label="Waving hand emoji">
              👋
          </span>{' '}
          Hello from Codebase Alpha!
          </h2>
          <div className="ui two column stackable grid container">
            <div className="ten wide column">
                <div className="ui placeholder">
                    <div className="image header">
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div className="paragraph">
                        <div className="full line"></div>
                        <div className="full line"></div>
                        <div className="full line"></div>
                        <div className="full line"></div>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
            <div className="six wide column">
                <Social />
            </div>
          </div>
    </div>
)

export default Intro