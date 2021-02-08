import React from 'react'
import ReactDOM from 'react-dom'
// import Header from './Component/Header/Header'
// import Footer from './Component/Footer/Footer'
// import Movie from './Component/Movie/Movie'
// import Movies from './Component/Movies/Movies'
// import MovieDetails from './Component/MovieDetails/MovieDetails'
import './index.scss'
import App from './Components/App/App'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
