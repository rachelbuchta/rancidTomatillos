import React from 'react'
import './SortDropDown.scss'

const SortDropDown = () => {

  return (
    <select onchange="selectedSubjectName()" className="dropDown">
      <option>Highest to Lowest Rating</option>
      <option>Lowest to Highest Rating</option>
    </select>
  )
}

export default SortDropDown