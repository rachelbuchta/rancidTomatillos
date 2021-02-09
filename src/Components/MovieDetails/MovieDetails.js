import React from 'react'
import './MovieDetails.scss'
import X from '../../images/cancel.png'
import star from '../../images/favourites.png'

const MovieDetails = ({currentMovie, exitDetails}) => {

  console.log(currentMovie[0])
  console.log(currentMovie[1])

  const convertToCurrency = (num) => {
    return num.toLocaleString('EN-US', {style: 'currency', currency: 'USD'})
  }

  const returnMovieTrailers = () => {
    const test =  currentMovie[1].videos.map(video => {
      console.log(video.key)
      return <iframe src={`https://www.youtube.com/embed/${video.key}`} title={currentMovie[0].movie.title}></iframe>
    })
    return test
  }
 
  return (
    <main>
      <img className="backdrop" src={currentMovie[0].movie.backdrop_path} alt=""/>
      <div className="detailsWrapper">
        <section className='detailsContainer'>
          <div className="btnWrapper">
            <img onClick={exitDetails} className="cancelImg" src={X} alt="exit-details"/>
          </div>
          
          <div className='txtContainer'>
            <h1 className='title'>{currentMovie[0].movie.title}</h1>
            <div className='dateContainer'>
              <p className='bold'>Release Date: <br/>
              {currentMovie[0].movie.release_date} 
              </p>
              <p className='bold'>Average Rating: <br/>
               {currentMovie[0].movie.average_rating.toFixed(1)}
                <img className="starImg" src={star} alt="exit-details"/>
              </p>
              <p className='bold'>Runtime: <br/>
              {currentMovie[0].movie.runtime} minutes
              </p>
            </div>
            <p className='overview'>{currentMovie[0].movie.overview}</p>

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
        <div className="videoContainer">
          {returnMovieTrailers()}
        </div>
      </div>
    </main>
  )
}

export default MovieDetails