import './App.scss'
import React, { Component } from 'react'
import Movies from '../Movies/Movies'
import movieData from '../../movieData'

class App extends Component {
  constructor() {
    super()
    this.state = { movies: movieData }
  }
  render() {
    return (
      <div className="App">
        <Movies movies={this.state.movies}/>
      </div>
    )
  }
}

export default App;
