export const getAllMovies = () => {
    return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movie")
        .then(response => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('We apologize. We are having issues loading this page ... Please try again later!')
          }
        })
}

export const getSingleMovie = (id) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
        .then(response => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('We apologize. We are having issues loading this page ... Please try again later!')
          }
        })
}
