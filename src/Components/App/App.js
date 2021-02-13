import './App.scss'
import React, { Component } from 'react'
import Movies from '../Movies/Movies'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MovieDetails from '../MovieDetails/MovieDetails'
import Error from '../Error/Error'
import SearchBar from '../SearchBar/SearchBar'
import ReRoute from '../ReRoute/ReRoute'
import { getAllMovies, getSingleMovie, getSingleMovieVideo } from '../../util'
import { Redirect, Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = { 
      movies: {movies: []},
      currentMovie: '',
      errorStatus: null,
      error: '',
      isLoading: true
     }
  }

  componentDidMount = () => {
    let responseStatus
    getAllMovies()
      .then(response => {
        responseStatus = response.status
        return response.json()
      })
      .then((movies) => {
        console.log('Movies Request Successful', movies)
        this.setState({ movies: movies.movies, isLoading: false })
      })
      .catch(error => {
        console.log('Movies Request Failed', error)
        this.setState({ error: error, errorStatus: responseStatus })
    })
      // .then(this.getAllData())
  }

  filterMovies = (input) => {
    const filteredMovies = this.state.movies.filter(movie => {
      const upperCaseTitle = movie.title.toUpperCase()
      return upperCaseTitle.includes(input.toUpperCase())
    })
    console.log(filteredMovies)
    this.setState({ movies: filteredMovies })
  }

  // name.charAt(0).toUpperCase() + name.slice(1)

  getSingleMovieData = (id) => {
    this.setState({ isLoading: true })
    let movie
    let videos
    let responseStatus
    return Promise.all([getSingleMovie(id), getSingleMovieVideo(id)])
      .then(responses => {
        responseStatus = [responses[0].status, responses[1].status]
        return Promise.all(responses.map(response => response.json()))
      })
      .then(responses => {
        movie = responses[0]
        videos = responses[1]
        this.setState({ currentMovie: [movie.movie, videos.videos], isLoading: false })
      })
      .catch(error => {
        console.log('Movies Request Failed', error)
        const filteredResponses = responseStatus.filter(status => status > 299)
        this.setState({ error: error, errorStatus: Number(filteredResponses) })
    })
  }

  render() {
    return (
      <div className='App'>
        <Header />

        <SearchBar movies={this.state.movies} filterMovies={this.filterMovies}/>

        <Switch>

        {this.state.error && (
          <Error error={this.state.error} errorStatus={this.state.errorStatus}/>
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
