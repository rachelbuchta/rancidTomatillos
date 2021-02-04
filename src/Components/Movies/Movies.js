import React from 'react'
import './Movies.scss'
import Movie from '../Movie/Movie'

const Movies = ({movies}) => {
    return(
        <section className="moviesContainer">
            <Movie />
        </section>
    )
}

export default Movies