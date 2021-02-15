import React from 'react'
import './Header.scss'
import reelzLogo from '../../images/movieTicket.png'
import { NavLink } from 'react-router-dom'

const Header = ({toggleFavoritesPage}) => {

    // const toggleFavoritesPage = () => {
    //   console.log(favoritesPage)
    //  return favoritesPage = false
    // }
    return (
      <header className='text'>
        {/* <Link className='headerLink' to='/'>
          <img className='headerImg' src={reelzLogo} alt='Reelz Logo'/>
        </Link> */}
        {/* <NavLink className='favoritesPage' to='/favorites' onClick={toggleFavoritesPage}>
          View Favorites */}
          {/* <img className='headerImg' src={reelzLogo} alt='Reelz Logo'/> */}
        {/* </NavLink> */}
          <h1 className='shadows'>Reelz</h1>
      </header>
    )
}

export default Header