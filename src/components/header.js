import {Link} from "gatsby"
import React from "react"

const Header = () => (
  <header
    style={{
      background: `#417DD2`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >100 år med Fet Skolekorps</Link>
      </h1>
    </div>
  </header>
);

export default Header
