import './App.scss'
import React, { Component } from 'react'
import Movies from '../Movies/Movies'
import movieData from '../../movieData'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

class App extends Component {
  constructor() {
    super()
    this.state = { 
      movies: movieData,
      isClicked: null
     }
  }

  handleClick = (event) => {
    this.setState({isClicked: true})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Movies isClicked={this.state.isClicked}movies={this.state.movies} handleClick={this.handleClick}/>
        <Footer />
      </div>
    )
  }
}

export default App;
//pass handle click  it down to movie
//once movie is clicked
//pass back up find the id

//move handleclick

// clear state  to empty string 