import React from 'react'
import './ReRoute.scss'
import { Link } from 'react-router-dom'

const ReRoute = () => {
    return (
        <div>
            <h1>Excuse me.. are you lost? This place does not exist...</h1>
            <Link to='/'>Back to Home!</Link>
        </div>
    )
}

export default ReRoute