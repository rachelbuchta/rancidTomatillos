import React from 'react'
import './MovieDetails.scss'

const MovieDetails = ({currentMovie, exitDetails}) => {
  console.log(currentMovie)
  return (
    <main>
      <img className="backdrop" src={currentMovie.backdrop_path} alt=""/>
        <section className='detailsContainer'>
          <div className='txtContainer'>
            <button onClick={exitDetails}>X</button>
            <h1>{currentMovie.title}</h1>
            <p>{currentMovie.overview}</p>
            <div className='dateContainer'>
              <p>{currentMovie.release_date}</p>
              <p>{currentMovie.average_rating}</p>
              <p>{currentMovie.runtime}</p>
            </div>
            <p>{currentMovie.genres}</p>
            <p>{currentMovie.revenue}</p>
            <p>{currentMovie.budget}</p>
          </div>
          <img src={currentMovie.poster_path} alt=''/>
        </section>
    </main>
  )
}

export default MovieDetails