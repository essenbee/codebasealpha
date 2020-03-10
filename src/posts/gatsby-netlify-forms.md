---
title: "Gatsby and Netlify Forms"
date: "2020-03-10"
tags: "forms"
---
This short blog post is really a "note to self" so that I remember how to get Netlify forms working with static site technology like GatsbyJS. On episode 84 of my stream, I successfully created a contact form that was recognised by Netlify. All looked good, apart from the fact that form submissions were not being registered. I tried using an actual email address rather than _test@test.com_ and various other tweaks, all to no avail. The form was there on my Netlify dashboard, but submissions were ignored; they didn't even appear in the spam folder.

Then I found the answer. With Gatsby you need to have the following hidden input field on your form:
```
    <input type="hidden" name="form-name" value="contact" />
```
Once that was in place, everything worked as expected! naturally, I discovered this fix about 10 minutes after I ended the stream, so I decided to write this blog as a way of remembering the solution. So, here is the full code for my form:
```
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
                        <input type="hidden" name="form-name" value="contact" />
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
```
So all that remains to do with this page is to add ReCAPTCHA v2 support and add a little more text, and it'll be finished. Of course, having just said that, the refactoring side of me now wants to pull that contact form out into a nice little component...