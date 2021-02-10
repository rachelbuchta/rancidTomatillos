import React from 'react'
import './Header.scss'
import reelzLogo from '../../images/movieTicket.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
      <header>
        <Link to='/' className="headerLink">
          <img className="headerImg" src={reelzLogo} alt="Reelz Logo"/>
        </Link>
        <h1>Reelz</h1>
      </header>
    )
}

export default Header