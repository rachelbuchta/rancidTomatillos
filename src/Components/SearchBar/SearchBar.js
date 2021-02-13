import React, { Component } from 'react'
import './SearchBar.scss'

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    clearInputs() {
        this.setState({ input: ''})
    }

    render() {
        return  (
            <form>
                <input 
                    className="searchInput"
                    value={this.state.input}
                    name="input"
                    placeholder="Search by title"
                    onChange={() => this.handleChange()}
                 />
            </form>
        )
    }
}

export default SearchBar
