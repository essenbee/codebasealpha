import React from "react"
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

const SEO = ( { title, description, pathname, isArticle } ) => (
    <StaticQuery
        query={query}
        render={({
                    site: {
                        siteMetadata: {
                            author,
                            avatar,
                            description,
                            siteLanguage,
                            siteUrl,
                            sitename,
                            title,
                            titleTemplate,
                            twitterUsername,
                        },
                    },
               }) => {
               const seo = {
                   title: title,
                   description: description,
                   avatar : `${siteUrl}${avatar}`,
                   url: `${siteUrl}${pathname || "/"}`,
                }

                return (
                    <Helmet title={seo.title} titleTemplate={titleTemplate}>
                        <meta name="description" content={seo.description} />
                        <meta name="image" content={seo.avatar} />
                        <meta property="og:url" content={seo.url} />
                        <meta name="twitter:creator" content={twitterUsername} />
                        <meta name="twitter:title" content={seo.title} />
                        <meta name="twitter:description" content={seo.description} />
                        <meta name="twitter:image" content={seo.avatar} />
                    </Helmet>
                )
            }
        }
    />
)

export default SEO

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    pathname: PropTypes.string,
    IsArticle: PropTypes.bool,
}

SEO.defaultProps = {
    title: null,
    description: null,
    pathname: null,
    isArticle: false,
}

const query = graphql `query siteData {
    site {
      siteMetadata {
        author
        avatar
        description
        siteLanguage
        siteUrl
        sitename
        title
        titleTemplate
        twitterUsername
      }
    }
  }`