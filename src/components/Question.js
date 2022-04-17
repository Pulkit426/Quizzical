import React from 'react'
import Option from './Option'
import '../index.css'
import unescape from 'unescape'

const Question = (props) => {

    const filtered = (htmlstr) => {
        htmlstr = htmlstr.replaceAll("&#039;" , "'")
        htmlstr = htmlstr.replaceAll("&ndash;" , "_")
        return htmlstr
    }
    
    
    const optionsMapped = props.qna.options.map(option => <Option value={option} 
                                                                  currentAns= {props.qna.currentAns}
                                                                  gameOver={props.gameOver}
                                                                  isCorrect = {props.qna.isCorrect}
                                                        onClick={
                                    ()=>props.toggle(props.qna.id,option)}
                                     />)


                                  
    
    return (
        <div>
            <h4 style= {{"color" : "#293264"}}> {unescape(filtered(props.qna.question))} </h4>
           <div className="options-container">
            {optionsMapped}
           </div>
        </div>
)}

export default Question