import React, { Component } from 'react'
import './Movie.scss'

const Movie = ({title, image, tagline, id, handleClick, isClicked}) => {
 

    
    //  handleClick = (event) => {
    //   //create a new movie details component
    //   //hide the 
    //   // page loads all movies are shown
    //   // user clicks details all movies are hidden except for clicked movie
    //   // if the id matches clicked id display: block else display: none
    //   const test = this.setState({isClicked: true})
     
    //   console.log(test)
    //   console.log(this.props)
    //   console.log(this.props.id)
    // }

      return (
        <article className="movieCard" id={id} onClick={handleClick}>
          <img src={image} alt="potato"/>
          <h2>{title}</h2>
          <p>{tagline}</p>
        </article>
      )

 
    

  }



export default Movie
// style={{display: this.isClicked ? "block" : "none"}}
  