import React from 'react'
import './Header.scss'
import reelzLogo from '../../images/movieTicket.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='text'>
        {/* <Link className='headerLink' to='/'> */}
      <h1 className='shadows'>Reelz</h1>
      {/* </Link>  */}
    </header>
  )
}

export default Header