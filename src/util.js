// export const getAllMovies = () => {
//     return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movie")
//         .then(response => {
//           if (response.ok) {
//             return response.json()
//           } else {
//             throw new Error('We apologize. We are having issues loading this page ... Please try again later!')
//           }
//         })
// }

export const getAllMovies = () => {
return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')  
  .then(response => { 
      console.log(response.status)                  
      if(!response.ok) {
        throw new Error('Something went wrong.');
      } else if (response.status === 500) {
        throw new Error('Server is not responding')
      } 
        return response.json()
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
