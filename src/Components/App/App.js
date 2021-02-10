import './App.scss'
import React, { Component } from 'react'
import Movies from '../Movies/Movies'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MovieDetails from '../MovieDetails/MovieDetails'
import { getAllMovies, getSingleMovie, getSingleMovieVideo } from '../../util'
import { Route } from 'react-router-dom'

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

  getSingleMovieData = (id) => {
    const selectedMovieDetails = getSingleMovie(id)
    const selectedMovieVideos = getSingleMovieVideo(id)
    return Promise.all([selectedMovieDetails, selectedMovieVideos])
      .then(movie => {
        this.setState({ currentMovie: [movie[0], movie[1]] })
      })
      .then(() => console.log("fetch:",this.state.currentMovie))
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
        < Route exact path='/' render={()=> <Movies movies={this.state.movies} getSingleMovieData={this.getSingleMovieData}/>}/>
        )}

        {this.state.currentMovie && (
        < Route 
           exact
           path='/:id'
           render={ ( { match }) => {
             const { id } = match.params
             return <MovieDetails currentMovie={this.state.currentMovie} exitDetails={this.exitDetails}/>
           }}/>
        )}
        <Footer />
      </div>
    )
  }
}

export default App

