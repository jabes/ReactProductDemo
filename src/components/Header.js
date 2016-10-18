import React from 'react'
import {Link} from 'react-router'
import LogoImg from '../images/logo.svg'
import '../stylesheets/components/header.scss'

const Header = React.createClass({

  propTypes: {
    menuOpen: React.PropTypes.bool,
    onHamburgerClick: React.PropTypes.func
  },

  render() {
    return (
      <header>
        <Link to="/" className="logo">
          <img src={LogoImg}/>
        </Link>
        <button
          onClick={this.props.onHamburgerClick}
          className={`hamburger menu-${this.props.menuOpen ? 'open' : 'closed'}`}>
          <span className="bun top">&nbsp;</span>
          <span className="patty top">&nbsp;</span>
          <span className="bun bottom">&nbsp;</span>
        </button>
      </header>
    )
  }

});

export default Header
