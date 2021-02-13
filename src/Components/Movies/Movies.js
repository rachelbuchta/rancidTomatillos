import React from 'react'
import './Movies.scss'
import Movie from '../Movie/Movie'
import { getSingleMovieVideo } from '../../util'


const Movies = ({movies, getSingleMovieData, isLoading}) => {
  
     

  let movieCards
  if (isLoading) {
    return (<h2 className="loadingScreen">Loading...</h2>)
  } else {
    movieCards = movies.map(movie => {
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

  
      return(
        <section className='moviesContainer'>
          {movieCards}
        </section>
    )
  }


export default Movies
