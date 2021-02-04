import './App.scss'
import React, { Component } from 'react'
import movieData from '../../movieData'

class App extends Component {
  constructor() {
    super()
    this.state = { movieData }
  }
  render() {
    return (
      <div className="App">
        {console.log(this.state)}
      </div>
    )
  }
}

export default App;
