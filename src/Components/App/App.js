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
      currentMovie: '',
      errorStatus: null,
      error: '',
      isLoading: true,
      searchResults: null,
      favoritedIds: null,
      favoritedMovies: null
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

  filterMovies = (input) => {
    const filteredMovies = this.state.movies.filter(movie => {
      const upperCaseTitle = movie.title.toUpperCase()
      return upperCaseTitle.includes(input.toUpperCase())
    })
    this.setState({ searchResults: filteredMovies })
  }

  findFavorites = () => {
    let favoriteMovies = []
    const foundMovies = this.state.favoritedIds.forEach(id => {
       const test = this.state.movies.filter(movie => {
        if(movie.id === id.favoritedId) {
         return movie
       } 
      })
      console.log(test)
     return favoriteMovies.push(test)
    })
    console.log(favoriteMovies)
    this.setState({favoritedMovies: favoriteMovies})
   console.log(this.state.favoritedMovies)
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
        <section className='test'>

          <div className='searchContainer'>
            <SearchBar movies={this.state.movies} filterMovies={this.filterMovies}/>
            <SortDropDown />
          </div>
          <Header />
        </section>
      
         
        <Switch>

        {this.state.error && (
          <Error error={this.state.error} errorStatus={this.state.errorStatus}/>
        )}

        < Route 
          exact
          path='/' 
          render={()=> <Movies movies={this.state.movies} searchResults={this.state.searchResults} getSingleMovieData={this.getSingleMovieData} isLoading={this.state.isLoading} favoritedMovies={this.state.favoritedMovies}/>}
          />

        < Route 
           exact
           path='/:id'
           render={ ( { match }) => {
             const { id } = match.params
             return <MovieDetails currentMovie={this.state.currentMovie} isLoading={this.state.isLoading} />
           }}/>

        < Route 
          exact
          path='/favorites'
          render={()=> <Favorites favoritedMovies={this.state.favoritedMovies}/>}/>
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App
