import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className='footerMotto'>
        <p>Get Real About Your Reelz</p>
      </div>
      <div className='linkedIn'>
        <p>Contact Us:</p>
        <a className='linkedInProfile' href='https://www.linkedin.com/in/colefiscus/'>Cole Fiscus</a>
        <a className='linkedInProfile' href='https://www.linkedin.com/in/rachelbuchta/'>Rachel Buchta</a>
      </div>
    </footer>
  )
}

export default Footer