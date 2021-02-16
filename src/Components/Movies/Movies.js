import React from 'react'
import './Movies.scss'
import Movie from '../Movie/Movie'
/* eslint-disable indent */

const Movies = ({movies, getSingleMovieData, isLoading, searchResults}) => {
  
  const buildMovieCard = (type) => {
    return type.map(movie => {
      return (
        <Movie
          image={movie.poster_path}
          id={movie.id}
          title={movie.title}
          average_rating={movie.average_rating}
          key={movie.id}
          getSingleMovieData={getSingleMovieData}
        />
      )
    })
  }

  if (isLoading) {
    return (<h2 className='loadingScreen'>Loading...</h2>)
  } else if (searchResults && searchResults.length === 0) {
    return (<h2 className='loadingScreen'>No results for that search found.</h2>)
  }

  return (
    <section className='moviesContainer'>
     {searchResults ? buildMovieCard(searchResults) : buildMovieCard(movies)}
    </section>
  )
}

export default Movies
