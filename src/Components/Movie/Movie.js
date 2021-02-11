import React from 'react'
import './Movie.scss'
import { Link } from 'react-router-dom'

const Movie = ({title, image, id, getSingleMovieData}) => {
    return (
      <article className="movieCard">
        <Link to={`/${id}`} onClick={() => getSingleMovieData(id)}>
          <img className="cardImage" src={image} alt="potato"/>
        </Link>
        <h2>{title}</h2>
      </article>
    )
  }

export default Movie  