import React from 'react'
import './MovieDetails.scss'

const MovieDetails = ({currentMovie, exitDetails}) => {

  const convertToCurrency = (num) => {
    return num.toLocaleString('EN-US', {style: 'currency', currency: 'USD'})
  }
 
  return (
    <main>
      <img className="backdrop" src={currentMovie.backdrop_path} alt=""/>
        <section className='detailsContainer'>
          <div className="btnWrapper">
            <button onClick={exitDetails}>X</button>
          </div>
          <div className='txtContainer'>
            <h1 className='title'>{currentMovie.title}</h1>
            <p className='overview'>{currentMovie.overview}</p>
            <div className='dateContainer'>
              <p>Release Date: {currentMovie.release_date}</p>
              <p>Average Rating: {currentMovie.average_rating.toFixed(1)}</p>
              <p>Runtime: {currentMovie.runtime} minutes</p>
            </div>

            {currentMovie.genres.length > 1 ? 
            <p>Genres: {currentMovie.genres.join(', ')}</p> : 
            <p>Genre: {currentMovie.genres}</p>}

            {currentMovie.budget === 0 ? 
            <p>Budget: $0</p> :
            <p>Budget: {convertToCurrency(currentMovie.budget)}</p>
            }

            {currentMovie.revenue === 0 ?
            <p>Revenue: $0</p> :
            <p>Revenue: {convertToCurrency(currentMovie.revenue)}</p>
            } 
          </div>
        </section>
    </main>
  )
  
}

export default MovieDetails