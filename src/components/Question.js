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
    
    // const temp = [...props.qna.incorrect_answers, props.qna.correct_answer]
    // const optionVal= temp.map((option,index) => {
    //     return {id: index+1,
    //             value: option,
    //             isCorrect: false,
    //             isHeld: false}
    // })
    // console.log(optionVal)
    // const [options, setOptions] = useState(optionVal)
    
    // const toggle = (id) => {
    //     setOptions(prevOptions => prevOptions.map(
    //                               option => {
    //                               if(option.id===id) {
    //                                   option.isHeld = !option.isHeld
    //                                   console.log("state changed")}
    //                                 else
    //                                     option.isHeld= false  
    //                                   return option}))
    // }
    const optionsMapped = props.qna.options.map(option => <Option value={option} 
                                    //                     onClick={
                                    // ()=>props.toggle(props.qna.id,props.qna.options.id)}
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