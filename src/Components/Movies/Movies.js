import React from 'react'
import './Movies.scss'
import Movie from '../Movie/Movie'

const Movies = ({movies, getSingleMovieData}) => {
  const movieCards = movies.map(movie => {
    return (
      <Movie 
        image={movie.poster_path}
        id={movie.id}
        key={movie.id}
        getSingleMovieData={getSingleMovieData}
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