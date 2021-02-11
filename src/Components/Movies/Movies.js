import React from 'react'
import './Movies.scss'
import Movie from '../Movie/Movie'

const Movies = ({movies, getSingleMovieData}) => {

  const movieCards = movies.map(movie => {
    return (
      <Movie 
        image={movie.poster_path}
        title={movie.title}
        average_rating={movie.average_rating}
        id={movie.id}
        key={movie.id}
        // starCount={starCount}
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