import React from 'react'
import './Error.scss'
import gif from '../../images/giphy.gif'

const Error = ({error, errorStatus}) => {
  console.log(error)
  // console.log(props)
  console.log("HEY")
  if (errorStatus >= 400 && errorStatus <= 499) {
    return (
      <main className='main'>
        <img className='catGif' src={gif} alt='404 error message with cat'/>
      </main>
    )
    
  } else if (errorStatus >= 499) {
    return (
      <main className='main'>
        <h1 className='errorStatus'>500 Error</h1>
        <h2 className='errorMsg'>Oops! Something went wrong. Please try refreshing the page.</h2>
      </main>
    )
  }
}


export default Error

