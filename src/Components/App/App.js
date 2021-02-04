import './App.scss'
import React, { Component } from 'react'
import Movies from '../Movies/Movies'
import movieData from '../../movieData'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

class App extends Component {
  constructor() {
    super()
    this.state = { movies: movieData }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Movies movies={this.state.movies}/>
        <Footer />
      </div>
    )
  }
}

export default App;
