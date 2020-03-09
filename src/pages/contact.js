import React from 'react'
import { Container } from 'semantic-ui-react'
import Layout from '../components/layout'
import Social from '../components/social'

const ContactPage = () => (
  <Layout>
      <Container>
          <br />
          <h2>
              Contact Me
          </h2>
          <div className="ui two column stackable grid container">
            <div className="ten wide column">
                <p>
                    Contact me using the social media buttons or fill in the Contact Form below.
                </p>
            </div>
            <div className="six wide column">
                <Social />
            </div>
          </div>
          <div>
                <form className="ui form"
                      name="contact" 
                      method="post" 
                      data-netlify="true"
                      data-netlify-honeypot="bot-field">
                    <input type="hidden" name="bot-field" />
                    <div className="field">
                        <label for="name">Name
                            <input id="name" name="name" type="text" placeholder="Your name" />
                        </label>
                    </div>
                    <div className="field">
                        <label for="email">Email Address
                            <input id="email" name="email" type="email" placeholder="yourname@email.com" />
                        </label>
                    </div>
                    <div className="field">
                        <label for="message">Message
                            <textarea id="message" placeholder="Type your message here" name="message" ></textarea>
                        </label>
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
          </div>
      </Container>
  </Layout>
)

export default ContactPage