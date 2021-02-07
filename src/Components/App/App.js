import './App.scss'
import React, { Component } from 'react'
import Movies from '../Movies/Movies'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MovieDetails from '../MovieDetails/MovieDetails'
import { getAllMovies, getSingleMovie, getSingleMovieVideo } from '../../util'

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
      .then(movies => {
        console.log('Movies Request Successful', movies)
        this.setState({ movies: movies, isLoading: false })
      })
      .catch(error => {
        console.log('Movies Request Failed', error)
        this.setState({ error: "Oops! Something went wrong!" })
      })
  }

  handleClick = (id) => {
    const current = this.state.movies.movies.find(movie => movie.id === id)
    this.getSingleMovieData(current.id)
    // getSingleMovie(current.id)
    //   .then(movie => this.setState({currentMovie: movie}))
  }

  getSingleMovieData = (id) => {
    const selectedMovie = getSingleMovie(id)
    const selectedMovieVideo = getSingleMovieVideo(id)
    return Promise.all([selectedMovie, selectedMovieVideo])
      .then(movie => {
        this.setState({ currentMovie: [movie[0], movie[1]] })
      })
  }

  exitDetails = () => {
    this.setState({currentMovie: ''})
  }

  render() {
    return (
      <div className='App'>
        <Header />

        {this.state.isLoading && !this.state.error &&
        ( <h2 className="userMsg">Loading...</h2> )}

        {this.state.error && (
          <h2 className="userMsg">{this.state.error}</h2>
        )}

        {!this.state.isLoading && !this.state.currentMovie && (
        <Movies movies={this.state.movies} handleClick={this.handleClick}/>
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
