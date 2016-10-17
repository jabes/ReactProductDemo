import React from 'react'
import {Link} from 'react-router'

const Header = React.createClass({

  render() {
    return (
      <header>
        <Link to="/">
          <img src="assets/logo.svg" alt="Logo" />
        </Link>
      </header>
    )
  }

});

export default Header
