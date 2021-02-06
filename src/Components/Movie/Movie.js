import React from 'react'
import './Movie.scss'

const Movie = ({title, image, tagline, id, handleClick}) => {
    return (
      <article className="movieCard">
        <a href="#movies" className='itemImage'>
        <img className="cardImage" src={image} onClick={() => handleClick(id)} alt="potato"/></a>
        <h2>{title}</h2>
        {/* <p>{tagline}</p> */}
      </article>
    )
  }



export default Movie

  