import React from 'react'
import {Link} from 'react-router'
import LogoImg from '../images/logo.svg'
import '../stylesheets/components/header.scss'

const Header = React.createClass({

  render() {
    return (
      <header>
        <Link to="/" className="logo">
          <img src={LogoImg} />
        </Link>
      </header>
    )
  }

});

export default Header
