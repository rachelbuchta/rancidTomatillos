export const getAllMovies = () => {
return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movie')  
  // .then(response => { 
  //     console.log(response.status)                  
  //     if(!response.ok) {
  //       throw new Error('Something went wrong.');
  //     } else if (response.status === 500) {
  //       throw new Error('Server is not responding, try reloading')
  //     } 
  //       return response.json()
  }


// export const getAllMovies = (error) => {
// return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movie')  
//   .then(response => { 
//     if(response.status >= 400 && response.status <= 499) {
//         throw new Error(errorOne)
//       } else if (response.status >= 499) {
//         throw new Error(errorTwo)
//       }
//         return response.json()
//   })
// }



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

export const getSingleMovieVideo = (id) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('We apologize. We are having issues loading this page ... Please try again later!')
        }
      })
}



