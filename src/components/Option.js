import React from 'react'
import '../index.css'

const Option = (props) => {
    const styles = {
        "backgroundColor": (props.currentAns === props.value && !props.gameOver) ? "green" : 
        (props.currentAns === props.value && props.gameOver && !props.isCorrect)? "red" :
        (props.currentAns === props.value && props.gameOver && props.isCorrect)? "green" : null 
    }
    return (
        <div>
        <button onClick={props.onClick} style={styles} className="option">
            {props.value}
        </button>
        </div>
        
        
    )
}

export default Option
