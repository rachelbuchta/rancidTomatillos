import React from 'react'
import './Header.scss'
import reelzLogo from '../../images/movieTicket.png'

const Header = () => {
    return (
        <header>
          <img className="headerImg" src={reelzLogo} alt="Reelz Logo"/>
          <h1>Reelz</h1>
        </header>
    )
}

export default Header