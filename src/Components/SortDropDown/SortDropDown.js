import React from 'react'
import './SortDropDown.scss'

const SortDropDown = () => {

  const selectSort = () => {
    
  }


  return (
    <select onchange="selectedSubjectName()" id="subjectName">
      <option>Highest to Lowest Rating</option>
      <option>Lowest to Highest Rating</option>
    </select>
  )
}

export default SortDropDown