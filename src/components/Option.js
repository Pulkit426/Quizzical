import React from 'react'
import '../index.css'
import unescape from 'unescape'

const Option = (props) => {
    const filtered = (htmlstr) => {
        htmlstr = htmlstr.replaceAll("&#039;" , "'")
        htmlstr = htmlstr.replaceAll("&ndash;" , "_")
        return htmlstr
    }

    const styles = {
        "backgroundColor": (props.currentAns === props.value && !props.gameOver) ? "green" : 
        (props.currentAns === props.value && props.gameOver && !props.isCorrect )? "red" :
        (props.currentAns === props.value && props.gameOver && props.isCorrect )? "green" :
        (props.currentAns !== props.value && props.correctAns === props.value && props.gameOver)? "green" : null 
    }
    return (
        <div>
        <button onClick={props.onClick} style={styles} className="option">
            {unescape(filtered(props.value))}
        </button>
        </div>
        
        
    )
}

export default Option
