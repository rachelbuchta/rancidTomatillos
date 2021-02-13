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
        // this.setState({ input: event.target.value })
        this.setState(prevState => {
            return {
                input: event.target.value + prevState.input
            }
        })
        this.props.filterMovies(this.state.input)
    }

    submitSearch(event) {
        event.preventDefault()
        this.props.filterMovies(this.state.input)
    }

    clearInputs() {
        this.setState({ input: ''})
    }

    render() {
        return  (
            <form className="searchInput">
                <input 
                    value={this.state.input}
                    name="input"
                    placeholder="Search by title"
                    onChange={(event) => this.handleChange(event)}
                 />
                 <button onClick={(event) =>this.submitSearch(event)}>Search</button>
            </form>
        )
    }
}

export default SearchBar
