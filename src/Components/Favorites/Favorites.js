import React from 'react'

const Favorites = ({movies, favoritedIds, findFavorites}) => {
  console.log(movies)
  console.log(favoritedIds)

  // const findFavorites = (movies) => {
  //   console.log(movies)
  //   return movies
    // const foundMovies = movies.filter(movie => {
    //   return favoritedIds.forEach(id => {
    //     return movie.id === id
    //   })
    // })
    // console.log(foundMovies)
    // return foundMovies
  
  return (
    
     <h2>{findFavorites}</h2>
   
  )
}

export default Favorites