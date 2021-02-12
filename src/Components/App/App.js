import './App.scss'
import React, { Component } from 'react'
import Movies from '../Movies/Movies'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MovieDetails from '../MovieDetails/MovieDetails'
import Error from '../Error/Error'
import ReRoute from '../ReRoute/ReRoute'
import { getAllMovies, getSingleMovie, getSingleMovieVideo } from '../../util'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = { 
      movies: [],
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
  }

  getSingleMovieData = (id) => {
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

  exitDetails = () => {
    this.setState({currentMovie: ''})
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
        {/* {this.state.isLoading && !this.state.error &&
        ( <h2 className='userMsg'>Loading...</h2> )} */}

        {this.state.error && (
          <Error error={this.state.error} errorStatus={this.state.errorStatus}/>
        )}
        
        {!this.state.isLoading && (
        < Route exact path='/' render={()=> <Movies movies={this.state.movies} getSingleMovieData={this.getSingleMovieData}/>}/>
        )}

        {this.state.currentMovie && (
        < Route 
           exact
           path='/:id'
           render={ ( { match }) => {
             const { id } = match.params
             return <MovieDetails currentMovie={this.state.currentMovie} />
           }}/>
        )}

        {/* < Route component={ReRoute} /> */}
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App
