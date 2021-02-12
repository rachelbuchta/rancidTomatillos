import React from 'react'
import './Error.scss'
import { Link } from 'react-router-dom'
import gif from '../../images/giphy.gif'

 const Error = ({error}) => {
  
   console.log(error.status)

   return (
     <main className='main'>
      <img className='catGif' src={gif}/>
     </main>
   )
}

export default Error