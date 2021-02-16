import React from 'react'
import './MovieDetails.scss'
import X from '../../images/exitIcon.png'
import star from '../../images/favourites.png'
import { Link } from 'react-router-dom'


const MovieDetails = ({currentMovie, isLoading}) => {

  const convertToCurrency = (num) => {
    return num.toLocaleString('EN-US', {style: 'currency', currency: 'USD'})
  }

  const returnMovieTrailers = () => {
    return currentMovie[1].map(video => {
       return <iframe src={`https://www.youtube.com/embed/${video.key}`} title={video.title} key={video.id}></iframe>
     })
   }
  
  return ( 
    isLoading 
    ? 
    <div className="loadingScreen"><h2>Loading...</h2></div> 
    : 
    <main className='main'>
      <img className='backdrop' src={currentMovie[0].backdrop_path} alt={`${currentMovie[0].title} image`}/>
      <div className='detailsWrapper'>

        <section className='detailsContainer'>
          <div className='btnWrapper'>
            <Link to='/'>
              <img className='cancelImg' src={X} alt='exit-details'/>
            </Link>
          </div>
          
          <div className='txtContainer'>
            <h1 className='title'>{currentMovie[0]
            .title}</h1>
            <div className='dateContainer'>
              <p className='bold'>Release Date: <br/>
              {currentMovie[0].release_date} 
              </p>
              <p className='bold'>Average Rating: <br/>
               {currentMovie[0].average_rating.toFixed(1)}
                <img className='starImg' src={star} alt='star-icon'/>
              </p>
              <p className='bold'>Runtime: <br/>
              {currentMovie[0].runtime} minutes
              </p>
            </div>
        
            <p className='genre'>{currentMovie[0].genres.join(' | ')}</p> 
            
            <p className='overview'>{currentMovie[0].overview}</p>
            
              {currentMovie[0].budget === 0 ? 

              <p className='money'>Budget: <br/> $0</p> :
              <p className='money'>Budget: <br/> {convertToCurrency(currentMovie[0].budget)}</p>
              }

              {currentMovie[0].revenue === 0 ?
              <p className='money'>Revenue: <br/> $0</p> :
              <p className='money'>Revenue: <br/> {convertToCurrency(currentMovie[0].revenue)}</p>
              } 
            
          </div>
        </section>
        {currentMovie[1].length ? 
        <div className='videoContainer'>
          {returnMovieTrailers()}
        </div> :
        <></>}
      </div>
    </main>
  )
}

export default MovieDetails