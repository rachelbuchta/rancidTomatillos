import React from 'react'
import './Movies.scss'
import Movie from '../Movie/Movie'

const Movies = ({movies, getSingleMovieData, isLoading, searchResults, favoritedMovies, favoritesPage, triggerDropDown}) => {
  console.log("favorites", favoritedMovies)
  console.log('movies', movies)
  console.log(favoritesPage)


  let movieCards
  let favoriteCards

  const buildMovieCard = (type) => {
    // sortByRatings().reverse()
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
  } else if (favoritesPage) {
    console.log(favoritesPage)
    favoriteCards = buildMovieCard(favoritedMovies)
  } else {
    movieCards = buildMovieCard(movies)
  } 

  //   if (isLoading) {
  //   return (<h2 className="loadingScreen">Loading...</h2>)
  // } else if (searchResults) {
  //   movieCards = buildMovieCard(searchResults)
  // } else if (triggerDropDown) {
  //   console.log(favoritesPage)
  //   movieCards = buildMovieCard(movies)
  // } else {
  //   movieCards = buildMovieCard(movies)
  // } 

  return (
    <section className='moviesContainer'>
      {movieCards}
      {favoriteCards}
    </section>
    )
  }

export default Movies
