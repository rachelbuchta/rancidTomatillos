import React from 'react'
import './Movies.scss'
import Movie from '../Movie/Movie'

const Movies = ({movies, isClicked, handleClick}) => {
  const movieCards = movies.movies.map(movie => {
    return (
      <Movie 
        image={movie.backdrop_path}
        title={movie.title}
        tagline={movie.tagline}
        id={movie.id}
        key={movie.id}
        handleClick={handleClick}
        isClicked={isClicked}
      />
    )
  })

    return(
      <section className="moviesContainer">
          {movieCards}
      </section>
  )
}

export default Movies