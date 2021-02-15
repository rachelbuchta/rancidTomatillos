import React from 'react'
import './Movies.scss'
import Movie from '../Movie/Movie'

const Movies = ({movies, getSingleMovieData, isLoading, searchResults, favoritedMovies, favoritesPage}) => {

  let movieCards
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
    return (<h2 className="loadingScreen">Loading...</h2>)
  } else if (searchResults) {
    movieCards = buildMovieCard(searchResults)
  } else {
    movieCards = buildMovieCard(movies)
  } 

  return (
    <section className='moviesContainer'>
      {movieCards}
    </section>
  )
}

export default Movies
