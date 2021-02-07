import React from 'react'
import './MovieDetails.scss'

const MovieDetails = ({currentMovie, exitDetails}) => {

  console.log(currentMovie[0])

  const convertToCurrency = (num) => {
    return num.toLocaleString('EN-US', {style: 'currency', currency: 'USD'})
  }
 
  return (
    <main>
      <img className="backdrop" src={currentMovie[0].movie.backdrop_path} alt=""/>
        <section className='detailsContainer'>
          <div className="btnWrapper">
            <button onClick={exitDetails}>X</button>
          </div>
          <div className='txtContainer'>
            <h1 className='title'>{currentMovie[0].movie.title}</h1>
            <p className='overview'>{currentMovie[0].movie.overview}</p>
            <div className='dateContainer'>
              <p>Release Date: <br/>
              {currentMovie[0].movie.release_date} 
              </p>
              <p>Average Rating: <br/>
               {currentMovie[0].movie.average_rating.toFixed(1)}
              </p>
              <p>Runtime: <br/>
              {currentMovie[0].movie.runtime} minutes
              </p>
            </div>

            {currentMovie[0].movie.genres.length > 1 ? 
            <p>Genres: {currentMovie[0].movie.genres.join(', ')}</p> : 
            <p>Genre: {currentMovie[0].movie.genres}</p>}

            {currentMovie[0].movie.budget === 0 ? 
            <p>Budget: $0</p> :
            <p>Budget: {convertToCurrency(currentMovie[0].movie.budget)}</p>
            }

            {currentMovie[0].movie.revenue === 0 ?
            <p>Revenue: $0</p> :
            <p>Revenue: {convertToCurrency(currentMovie[0].movie.revenue)}</p>
            } 
          </div>
        </section>
    </main>
  )
  
}

export default MovieDetails