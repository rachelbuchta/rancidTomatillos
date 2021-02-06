import React from 'react'
import './Movies.scss'
import Movie from '../Movie/Movie'

const Movies = (props) => {

    // const movieCards = props.movies.movies.movies
    // console.log(props)
    // console.log(movieCards)
    console.log(props.movies.movies.movies)
  const movieCards = props.movies.movies.movies.map(movie => {
    return (
      <Movie 
        image={movie.poster_path}
        // title={movie.title}
        // tagline={movie.tagline}
        id={movie.id}
        key={movie.id}
        handleClick={props.handleClick}
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