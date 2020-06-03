import React from "react"

import { Link } from "gatsby"

const Header = ({siteMetadata}) => (
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
      <TitleAndDescription siteMetadata={siteMetadata} />
    </div>
  </header>
);

const TitleAndDescription = ({ siteMetadata: { title, description } }) =>  (
  <>
    <h1>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >{ title }
      </Link>
    </h1>
    <h3>
      { description }
    </h3>
  </>
);

export default Header;
