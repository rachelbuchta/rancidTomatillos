import React from "react"
import './MovieDetails.scss'

const MovieDetails = ({currentMovie, handleClick}) => {
  return (
    <main>
      <section className="detailsContainer">
        <div className="txtContainer">
          <h1>{currentMovie.title}</h1>
          <p>This is a movie its probably good but idk its about a 3 on a 5 scale/ Got some characters, its gots a plot, its got an ending.Boom.</p>
          <div className="dateContainer">
            <p>{currentMovie.release_date}</p>
            <p>{currentMovie.average_rating}</p>
          </div>
          <p>Genre: RomCOM</p>
          <p>Revenue: $1,000,000,000</p>
          <p>Budget: $40</p>
        </div>
        <img src={currentMovie.poster_path} alt=""/>
      </section>
    </main>
  )
}

export default MovieDetails