import React from "react"

import { Link } from "gatsby"
import { StaticQuery, graphql } from 'gatsby'

const Header = () => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        color: `white`,
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <StaticQuery
        query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
      />
    </div>
  </header>
);

const TitleAndDescription = ({data}) => {
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description

  return (
    <div>
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >{title}
        </Link>
      </h1>
      <h3>
        {description}
      </h3>
    </div>
  )
};

export default Header
