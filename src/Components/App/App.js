import './App.scss'
import React, { Component } from 'react'
import Movies from '../Movies/Movies'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MovieDetails from '../MovieDetails/MovieDetails'
import Error from '../Error/Error'
import SearchBar from '../SearchBar/SearchBar'
import SortDropDown from '../SortDropDown/SortDropDown'
import Favorites from '../Favorites/Favorites'
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
      favoritedIds: null,
      favoritedMovies: null,
      favoritesPage: false,
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
        console.log(allMovies)
        this.setState({ movies: allMovies.movies, favoritedIds: favorites.ids, isLoading: false })
      })
      .then(this.findFavorites)
      .catch(error => {
        console.log('Movies Request Failed', error)
        const filteredResponses = responseStatus.filter(status => status > 299)
        this.setState({ error: error, errorStatus: Number(filteredResponses) })
    })
  }

  sortByRatings = () => {
    this.setState({ triggerDropDown: true })
    const sortedMovies = this.state.movies.sort((a,b) => {
      return b.average_rating - a.average_rating
    })
    console.log(sortedMovies)
    return sortedMovies
  }

  filterMovies = (input) => {
    const filteredMovies = this.state.movies.filter(movie => {
      const upperCaseTitle = movie.title.toUpperCase()
      return upperCaseTitle.includes(input.toUpperCase())
    })
    this.setState({ searchResults: filteredMovies })
  }

  toggleFavoritesPage = () => {
    this.setState({ favoritesPage: true })
    console.log("clicked")
  }

  findFavorites = () => {
    console.log('CLICKED')
    this.setState({ isLoading: true })
    let favoriteMovies = []
    return this.state.favoritedIds.forEach(id => {
       const foundMovies = this.state.movies.filter(movie => {
        if(movie.id === id.favoritedId) {
         return favoriteMovies.push(movie)
       } 
      })
      this.setState({favoritedMovies: favoriteMovies, isLoading: false})
      console.log(this.state.favoritedMovies)
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
        this.setState({ error: error, errorStatus: Number(filteredResponses) })
    })
  }

  render() {
    return (
      <div className='App'>

        <div className='searchContainer'>
          <SearchBar movies={this.state.movies} filterMovies={this.filterMovies}/>
          <SortDropDown triggerDropDown={this.state.triggerDropDown} sortByRatings={this.sortByRatings}/>
        </div>

        <Header toggleFavoritesPage={this.toggleFavoritesPage}/>

        <Switch>

        {this.state.error && (
          <Error error={this.state.error} errorStatus={this.state.errorStatus}/>
        )}

        < Route 
          exact
          path='/' 
          render={()=> <Movies movies={this.state.movies} searchResults={this.state.searchResults} getSingleMovieData={this.getSingleMovieData} isLoading={this.state.isLoading} favoritedMovies={this.state.favoritedMovies} favoritesPage={this.state.favoritesPage} triggerDropDown={this.state.triggerDropDown}/>}
          />

        < Route 
          exact
          path='/favorites'
          render={()=> <Favorites favoritedMovies={this.state.favoritedMovies}/>}/>

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
