import './App.scss'
import React, { Component } from 'react'
import Movies from '../Movies/Movies'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MovieDetails from '../MovieDetails/MovieDetails'
import Error from '../Error/Error'
import SearchBar from '../SearchBar/SearchBar'
import SortDropDown from '../SortDropDown/SortDropDown'
import ReRoute from '../ReRoute/ReRoute'
import { getAllMovies, getSingleMovie, getSingleMovieVideo, getFavorites, updateFavorites } from '../../util'
import { Redirect, Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = { 
      movies: {movies: []},
      currentMovie: null,
      errorStatus: null,
      error: '',
      isLoading: true,
      searchResults: null,
      triggerDropDown: false
    }
  }

  componentDidMount = () => {
    let responseStatus
    let allMovies
    let favorites
    return Promise.all([getAllMovies(), getFavorites()])
      .then(responses => {
        responseStatus = [responses[0].status, responses[1].status]
        return Promise.all(responses.map(response => response.json()))
      })
      .then(responses => {
        allMovies = responses[0]
        favorites = responses[1]
        this.setState({ movies: allMovies.movies, favoritedIds: favorites.ids, isLoading: false, error: false })
      })
      .catch(error => {
        console.log('Movies Request Failed', error)
        console.log('whatever')
        const filteredResponses = responseStatus.filter(status => status > 299)
        this.setState({ errorStatus: Number(filteredResponses) })
    })
  }

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
        this.setState({ error: error, errorStatus: Number(filteredResponses), isLoading: false })
    })
  }
  
  triggerDropDown = () => {
    this.setState({ triggerDropDown: true })
  }

  sortByRatings = () => {
    const sortedMovies = this.state.movies.sort((a,b) => {
      return b.average_rating - a.average_rating
    })
    return sortedMovies
  }

  filterMovies = (input) => {
    const filteredMovies = this.state.movies.filter(movie => {
      const upperCaseTitle = movie.title.toUpperCase()
      return upperCaseTitle.includes(input.toUpperCase())
    })
    this.setState({ searchResults: [...filteredMovies] })
  }

  render() {
    return (
      <div className='App'>

        <div className='searchContainer'>
          <SortDropDown 
          triggerDropDown={this.triggerDropDown} 
          triggerDropDownState={this.state.triggerDropDown} 
          sortByRatings={this.sortByRatings}
          />

          <SearchBar 
          movies={this.state.movies} 
          filterMovies={this.filterMovies}
          />
        </div>
        <Header />

        {this.state.error && (
        <Error error={this.state.error} 
        errorStatus={this.state.errorStatus}/>
        )}

        <Switch>

        < Route 
          exact
          path='/' 
          render={()=> <Movies 
          movies={this.state.movies} 
          searchResults={this.state.searchResults} 
          getSingleMovieData={this.getSingleMovieData} 
          isLoading={this.state.isLoading} 
          triggerDropDown={this.state.triggerDropDown} 
          error={this.state.error}/>}
        />

        < Route 
           exact
           path='/:id'
           render={ ( { match }) => {
             const { id } = match.params
             return <MovieDetails 
              currentMovie={this.state.currentMovie} 
              isLoading={this.state.isLoading}/>}}
        />

        </Switch>
        
        <Footer />
      </div>
    )
  }
}

export default App
