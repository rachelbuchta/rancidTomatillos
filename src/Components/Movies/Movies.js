import React from 'react'
import './Movies.scss'
import Movie from '../Movie/Movie'

const Movies = ({movies, handleClick}) => {
  const movieCards = movies.map(movie => {
    return (
      <Movie 
        image={movie.poster_path}
        // title={movie.title}
        // tagline={movie.tagline}
        id={movie.id}
        key={movie.id}
        handleClick={handleClick}
      />
    )
  })

    return(
      <section className='moviesContainer'>
        {movieCards}
      </section>
  )
}

export default Movies