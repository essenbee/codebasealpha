# codebasealpha.dev

[![Netlify Status](https://api.netlify.com/api/v1/badges/397b9d62-a38d-4136-a228-fe0c01142659/deploy-status)](https://app.netlify.com/sites/priceless-galileo-6f38de/deploys)
![Licence](https://img.shields.io/github/license/essenbee/codebasealpha)
![Twitch](https://img.shields.io/twitch/status/codebasealpha)
![Twitter](https://img.shields.io/twitter/follow/codebasealpha?label=Follow&style=social)

This is the repository of the [Codebase Alpha website](https://codebasealpha.dev), written using **GatsbyJS** and **Fomantic UI**, the community fork of **Semantic UI**. I am building the site live on-stream, beginning with Episode 81 on Twitch and archived on [YouTube](https://www.youtube.com/channel/UCFFtfkaWjMb9UMDpPVnC1Sg). The intent into show one way of building a static portfolio and blog site using the so-called JAM stack of technologies. I'm currently hosting the site on Netlify.

I am not a front-end developer by any stretch of the imagination (most of my experience is with back-end tech), but I want to show that a leopard can change its spots (at least temporarily), and that development skills and experience are generally transferrable between technologies. Just because, at this stage in my career, I mostly code in C# with .NET, doesn't mean I can't do other things. Learning new languages, frameworks and so on, is not that difficult (but _may_ be harder to master). No matter what your background, your skills are transferrable too; you _can_ tackle a wide variety of types of software project! And this portfolio site is intended to showcase all of the projects we have covered on the Codebase Alpha live coding stream.

I don't want to be doing a lot of CSS for my site, so I need a styling library that will allow me to make nice-looking, responsive pages without a lot of fuss. I could have used Bootstrap 4, but liked the design philosophy of Semantic UI, so settled upon that for use in this project. However, it seems that development is currently "paused" on the official repo for Semantic UI. I also experienced frustrating (i.e. stream-ending) issues integrating Semantic UI into GatsbyJS towards the end of Codebase Alpha [Episode 81](https://youtu.be/XGtqzwhCqpc). I simply could not get Semantic's CSS styling to apply on my page. It seems this difficulty was due to the instructions I was following for integrating Semantic into my GatsbyJS project being for Webpack 3, whereas I  was using Webpack 4.x. After that stream, Twitter user [lubber](https://twitter.com/lubber2009) tweeted me about **Fomantic UI**, the community fork of Semantic UI. Using this, my issues were solved! Fomantic UI has a great installation experience - I highly recommend it. Huge thanks to @lubber2009 for that tweet!

The Fomantic UI homepage can be found [here](https://fomantic-ui.com). I cover what I did to get my project back on track and working with Fomantic UI in Episode 82.

## Setting up Fomantic UI with React or GatsbyJS

Full instructions for getting Fomantic UI up and running in a GatsbyJS or React project can be found [here](https://medium.com/@fomantic/setting-up-fomantic-ui-with-react-f701b68f736c). Note that with GatsbyJS, you have to create a `gatsby-browser.js` file to import the `semantic.css` file into your project. See this repo for the exact contents of that file.

## YouTube Playlist

Watch the project videos on YouTube [here](https://www.youtube.com/playlist?list=PLStUQafDNqPOEpcNsc87ud2Y5SiwoEwsm). If you like what you see, please consider subscribing to my channel, its free to do so. Also check out the other projects covered on the channel - there is a wide variety of stuff on there, ranging from building an **Alexa skill** to **emulating a Z80 CPU** (and partial emulation of a ZX Spectrum 48K). The videos are all unedited archives of my live stream, so are "warts and all" records to a real developer's experiences working on a lot of different software projects. Languages covered include C#, C++, F# and GLSL (for the pixel shader stuff).
