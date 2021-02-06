import React from 'react'
import './MovieDetails.scss'

const MovieDetails = ({currentMovie, exitDetails}) => {
  console.log(currentMovie)
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
              <p>Runtime: {currentMovie.runtime}</p>
            </div>
            <p>{currentMovie.genres}</p>
            <p>{currentMovie.revenue}</p>
            <p>{currentMovie.budget}</p>
          </div>
          {/* <img src={currentMovie.poster_path} alt=''/> */}
        </section>
    </main>
  )
}

export default MovieDetails