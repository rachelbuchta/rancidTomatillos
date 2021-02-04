import React from 'react'
import './Movie.scss'

const Movie = ({image, title, tagline}) => {
    return (
        <article className="movieCard">
            <img src={image} alt="potato"/>
            <h2>{title}</h2>
            <p>{tagline}</p>
        </article>
    )
}

export default Movie