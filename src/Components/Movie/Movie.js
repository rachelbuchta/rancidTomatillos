import React from 'react'
import './Movie.scss'
import { Link } from 'react-router-dom'
import star from '../../images/favourites.png'

const Movie = ({average_rating,title, image, id, getSingleMovieData}) => {

  const starCount = () => {
    const roundedNumber = Math.round(average_rating.toFixed(1))
    const starElements = Array(roundedNumber).fill(star)
    const createStars = starElements.map(star => {
      return (
        <img className='starCountImg' src={star} alt='star-icon'/>
      )
    })
    console.log(createStars)
    return createStars
  }
    return (
      <section className='cardContainer'>
        <article className='movieCard'>
          <Link  className='movieLink' to={`/${id}`} onClick={() => getSingleMovieData(id)}>
            <img className='cardImage' src={image} alt={title}/>
          </Link>
        </article>
          <p>
          {starCount()}
          </p>
      </section>

      
    )
  }



export default Movie

  