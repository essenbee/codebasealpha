import React from "react"
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

const SEO = ( { title, titleTemplate, description, pathname, isArticle } ) => (
    <StaticQuery
        query={query}
        render={({
                    site: {
                        siteMetadata: {
                            author,
                            avatar,
                            defaultDescription,
                            siteLanguage,
                            siteUrl,
                            sitename,
                            defaultTitle,
                            defaultTitleTemplate,
                            twitterUsername,
                        },
                    },
               }) => {
               const seo = {
                   title: title || defaultTitle,
                   titleTemplate: titleTemplate || defaultTitleTemplate,
                   description: description || defaultDescription,
                   avatar : `${siteUrl}${avatar}`,
                   url: `${siteUrl}${pathname || "/"}`,
                   author: author,
                   language: siteLanguage,
                }

                return (
                    <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
                        <html lang={seo.language} />
                        <meta name="description" content={seo.description} />
                        <meta name="image" content={seo.avatar} />
                        <meta name="author" content={seo.author}></meta>
                        { seo.url && <meta property="og:url" content={seo.url} />}
                        { seo.title && <meta property="og:title" content={seo.title} />}
                        { seo.description && <meta property="og:description" content={seo.description} />}
                        { (isArticle ? true : null) && (<meta property="og.type" content="article" /> ) }
                        <meta name="twitter:card" content="summary_large_image" />
                        { seo.twitterUsername && <meta name="twitter:creator" content={twitterUsername} /> }
                        { seo.twitterUsername &&<meta name="twitter:site" content={twitterUsername} /> }
                        { seo.title && <meta name="twitter:title" content={seo.title} /> }
                        { seo.description && <meta name="twitter:description" content={seo.description} /> }
                        { seo.avatar && <meta name="twitter:image" content={seo.avatar} /> }
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
        defaultDescription: description
        siteLanguage
        siteUrl
        sitename
        defaultTitle: title
        defaultTitleTemplate: titleTemplate
        twitterUsername
      }
    }
  }`