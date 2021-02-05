import './App.scss'
import React, { Component } from 'react'
import Movies from '../Movies/Movies'
import movieData from '../../movieData'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MovieDetails from '../MovieDetails/MovieDetails'

class App extends Component {
  constructor() {
    super()
    this.state = { 
      movies: movieData.movies,
      currentMovie: ""
     }
  }

  handleClick = (id) => {
    
    const current = this.state.movies.find(movie => movie.id === id)
    // console.log(current)
    this.setState({currentMovie: current})
    console.log(this.state.currentMovie)
  }

  render() {
    return (
      <div className="App">
        <Header />

        {!this.state.currentMovie && (
        <Movies movies={this.state.movies} handleClick={this.handleClick}/>
        )}

        {this.state.currentMovie && (
        <MovieDetails currentMovie={this.state.currentMovie}/>
        )}
        
        <Footer />
      </div>
    )
  }
}

export default App;
//pass handle click  it down to movie
//once movie is clicked
//pass back up find the id

//move handleclick

// clear state  to empty string 

// if currentMovie is true
// this.state.display = movieDetails
//else
// this.state.display = allMovies

// if currentMovie === "" {
//   <Movies />
// }

// if currentMovie !== "" {
//   <MovieDetails />
// }