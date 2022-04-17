import React from 'react'
import '../index.css'

const Home = (props) => {
    return (
    <div className="start-page">
        <h1 style={{"color": "#293264"}}>Quizzical</h1>
        <h3> Let's test your knowledge</h3>
        <button className="start-btn" onClick={props.start}> Start Quiz </button>
    </div>
    )
}

export default Home