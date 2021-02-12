import React from 'react'
import './MovieDetails.scss'
import X from '../../images/cancel.png'
import star from '../../images/favourites.png'
import { Link } from 'react-router-dom'

const MovieDetails = ({currentMovie, isLoading}) => {

  const convertToCurrency = (num) => {
    return num.toLocaleString('EN-US', {style: 'currency', currency: 'USD'})
  }

  const returnMovieTrailers = () => {
      return currentMovie[1].videos.map(video => {
        return <iframe src={`https://www.youtube.com/embed/${video.key}`} title={currentMovie[0].movie.title} key={currentMovie[0].movie.id}></iframe>
      })
  }
  
  return ( 
    isLoading 
    ? 
    <div className="loadingScreen"><h2>Loading...</h2></div> 
    : 
    <main className='main'>
      <img className="backdrop" src={currentMovie[0].movie.backdrop_path} alt={`${currentMovie[0].movie.title} image`}/>
      <div className="detailsWrapper">
        <section className='detailsContainer'>
          <div className='btnWrapper'>
            <Link to='/'>
              <img className='cancelImg' src={X} alt='exit-details'/>
            </Link>
          </div>
          
          <div className='txtContainer'>
            <h1 className='title'>{currentMovie[0].movie.title}</h1>
            <div className='dateContainer'>
              <p className='bold'>Release Date: <br/>
              {currentMovie[0].movie.release_date} 
              </p>
              <p className='bold'>Average Rating: <br/>
               {currentMovie[0].movie.average_rating.toFixed(1)}
                <img className='starImg' src={star} alt='star-icon'/>
              </p>
              <p className='bold'>Runtime: <br/>
              {currentMovie[0].movie.runtime} minutes
              </p>
            </div>
            <p className='overview'>{currentMovie[0].movie.overview}</p>

            {currentMovie[0].movie.genres.length > 1 ? 
            <p className='genre'>Genres: <br/> {currentMovie[0].movie.genres.join(' | ')}</p> : 
            <p className='genre'>Genre: <br/> {currentMovie[0].movie.genres}</p>}

            <span className="movieMoney">
              {currentMovie[0].movie.budget === 0 ? 
              <p className='money'>Budget: <br/> $0</p> :
              <p className='money'>Budget: <br/> {convertToCurrency(currentMovie[0].movie.budget)}</p>
              }

              {currentMovie[0].movie.revenue === 0 ?
              <p className='money'>Revenue: <br/> $0</p> :
              <p className='money'>Revenue: <br/> {convertToCurrency(currentMovie[0].movie.revenue)}</p>
              } 
            </span>
          </div>
        </section>
        {currentMovie[1].videos.length ? 
        <div className='videoContainer'>
          {returnMovieTrailers()}
        </div> :
        <></>}
      </div>
    </main>
  )
}

export default MovieDetails