import React from 'react'
import './MovieDetails.scss'

const MovieDetails = ({currentMovie, exitDetails}) => {

  return (
    <main>
      <img className="backdrop" src={currentMovie.backdrop_path} alt=""/>
        <section className='detailsContainer'>
          <div className='txtContainer'>
            <button onClick={exitDetails}>X</button>
            <h1>{currentMovie.title}</h1>
            <p>This is a movie its probably good but idk its about a 3 on a 5 scale/ Got some characters, its gots a plot, its got an ending.Boom.</p>
            <div className='dateContainer'>
              <p>{currentMovie.release_date}</p>
              <p>{currentMovie.average_rating}</p>
            </div>
            <p>Genre: RomCOM</p>
            <p>Revenue: $1,000,000,000</p>
            <p>Budget: $40</p>
          </div>
          <img src={currentMovie.poster_path} alt=''/>
        </section>
    </main>
  )
}

export default MovieDetails