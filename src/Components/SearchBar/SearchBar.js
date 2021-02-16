import React, { Component } from 'react'
import './SearchBar.scss'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
        }
    }

    handleChange(event) {
        this.setState({ input: event.target.value })
        this.props.filterMovies(event.target.value)
    }


  render() {
    return  (
      <form className="searchInput">
        <input className='search'
          value={this.state.input}
          name="input"
          placeholder="Search by title"
          onChange={(event) => this.handleChange(event)}
        />
      </form>
    )
  }
}

export default SearchBar
