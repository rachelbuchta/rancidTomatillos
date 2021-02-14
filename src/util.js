export const getFavorites = () => {
  return fetch('https://movie-reelz-api.herokuapp.com/api/v1/favorites')
}

export const getAllMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')  
}

export const getSingleMovie = (id) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
}

export const getSingleMovieVideo = (id) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
}
