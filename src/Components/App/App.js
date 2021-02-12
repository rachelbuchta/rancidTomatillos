import './App.scss'
import React, { Component } from 'react'
import Movies from '../Movies/Movies'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MovieDetails from '../MovieDetails/MovieDetails'
import ReRoute from '../ReRoute/ReRoute'
import { getAllMovies, getSingleMovie, getSingleMovieVideo } from '../../util'
import { Redirect, Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = { 
      movies: {movies: []},
      currentMovie: '',
      error: '',
      isLoading: true
     }
  }

  componentDidMount = () => {
    getAllMovies()     
      .then(movies => {
        console.log('Movies Request Successful', movies)
        this.setState({ movies: movies.movies, isLoading: false })
      })
      .catch(error => {
        console.log('Movies Request Failed', error)
        this.setState({ error: 'Oops! Something went wrong!' })
      })
  }

  // componentDidUpdate = () => {
  //   if (this.state.currentMovie && this.state.isLoading) {
  //     this.setState({ isLoading: false })
  //   }
  // }

  getSingleMovieData = (id) => {
    this.setState({ isLoading: true })
    const selectedMovieDetails = getSingleMovie(id)
    const selectedMovieVideos = getSingleMovieVideo(id)
    return Promise.all([selectedMovieDetails, selectedMovieVideos])
      .then(movie => {
        this.setState({ currentMovie: [movie[0], movie[1]], isLoading: false })
      })
      .then(() => console.log('fetch:',this.state.currentMovie))
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
        {/* {this.state.isLoading && !this.state.error &&
        ( <h2 className="userMsg">Loading...</h2> )} */}

        {this.state.error && (
          <h2 className="userMsg">{this.state.error}</h2>
        )}

        < Route 
          exact
          path='/' 
          render={()=> <Movies movies={this.state.movies} getSingleMovieData={this.getSingleMovieData} isLoading={this.state.isLoading}/>}/>

        < Route 
           exact
           path='/:id'
           render={ ( { match }) => {
             const { id } = match.params
             return <MovieDetails currentMovie={this.state.currentMovie} isLoading={this.state.isLoading} />
           }}/>
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App
