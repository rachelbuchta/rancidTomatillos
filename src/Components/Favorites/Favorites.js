import React from 'react'
import './Favorites.scss'
import Movie from '../Movie/Movie'

const Favorites = ({favoritedMovies}) => {
  
  console.log(favoritedMovies)
  // const buildMovieCard = () => {
  // return favoritedMovies.map(movie => {
  //     return (
  //       <Movie
  //         image={movie.poster_path}
  //         id={movie.id}
  //         title={movie.title}
  //         average_rating={movie.average_rating}
  //         key={movie.id}
  //       />
  //     )
  //  })
  // }



  
  return (
    
     <section className='favoritesContainer'>
       {/* {buildMovieCard()} */}
     </section>
   
  )
}

export default Favorites