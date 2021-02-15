import { React, Component } from 'react'
import './SortDropDown.scss'

class SortDropDown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectValue: null
    }
  }

  handleSelection(event) {
    console.log(this.props)
    console.log(this.props.sortByRatings())
    if (this.props.triggerDropDown) {
      this.setState({ selectValue: event.target.value })
      this.renderCorrectSort()
    }
  }

  renderCorrectSort() {
    if (this.state.selectValue === 'highToLow') {
      this.props.sortByRatings()
    } else if (this.state.selectValue === 'lowToHigh') {
      this.props.sortByRatings().reverse()
    }
  }



  render() {
    return (
      <select onChange={(event)=>this.handleSelection(event)} className="dropDown">
        <option value='highToLow'>Highest to Lowest Rating</option>
        <option value='lowToHigh'>Lowest to Highest Rating</option>
      </select>
    )
  }
} 

export default SortDropDown