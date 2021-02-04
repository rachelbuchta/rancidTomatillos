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
        <Movies />
      </div>
    )
  }
}

export default App;
