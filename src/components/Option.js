import React from 'react'
import '../index.css'

const Option = (props) => {
    const styles = {
        "backgroundColor": props.isHeld ? "green" : null
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
