import './App.scss'
import React, { Component } from 'react'
import Movies from '../Movies/Movies'
// import movieData from '../../movieData'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MovieDetails from '../MovieDetails/MovieDetails'
import { getAllMovies } from '../../util'

class App extends Component {
  constructor() {
    super()
    this.state = { 
      movies: [],
      currentMovie: '',
      error: '',
      isLoading: true
     }
  }

  componentDidMount = () => {
    getAllMovies()     
      .then(movies => this.setState({ movies: movies, isLoading: false }))
      .catch(error => {
        console.log(error)
        this.setState({ error: "Oops! Something went wrong!" })
      })
  }

  handleClick = (id) => {
    const current = this.state.movies.find(movie => movie.id === id)
    this.setState({currentMovie: current})
  }

  exitDetails = () => {
    this.setState({currentMovie: ''})
  }

  render() {
    return (
      <div className='App'>
        <Header />

        {this.state.isLoading && <h2>Loading...</h2> }

        {!this.state.isLoading && !this.state.currentMovie && (
        <Movies movies={this.state} handleClick={this.handleClick}/>
        )}

        {this.state.currentMovie && (
        <MovieDetails currentMovie={this.state.currentMovie} exitDetails={this.exitDetails}/>
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

// if currentMovie === '' {
//   <Movies />
// }

// if currentMovie !== '' {
//   <MovieDetails />
// }