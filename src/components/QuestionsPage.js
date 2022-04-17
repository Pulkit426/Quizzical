/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react'
import { nanoid } from 'nanoid'

import Question from './Question.js'
import '../index.css'
const QuestionsPage = (props) => {
    
    const [questions,setQuestions] = useState([])
    const [dataRendered, setDataRendered] = useState(false)
     const randomize = (arr) => {
         const tempArr = [...arr]
         const newArr = []

         while(tempArr.length>0){
             const index = Math.floor(Math.random()*tempArr.length)
             newArr.push(tempArr[index])
             tempArr.splice(index,1)
         }

         return newArr
     }

       useEffect(() => { 
       fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple")
            .then(result => result.json())
            .then(json => {
                setQuestions(json.results.map(quiz => {
                    return {
                        id: nanoid(),
                        question: quiz.question,
                        options: randomize([...quiz.incorrect_answers,quiz.correct_answer]),
                        correctAns: quiz.correct_answer,
                        currentAns : '',
                        isCorrect: false,
                    }
                }))    
                setDataRendered(true)
            })  
    },[])
    
    console.log(questions)
    
    const toggle = () => {
        
    }
                                      
    const questionsMapped = questions.map(
                              value => <Question
                                        qna = {value}
                                        // toggle= {toggle} 
                                        />)
                              
   
    return (
        <div>
        {dataRendered ? questionsMapped : <h1>Questions Loading </h1>}
        {dataRendered && <div className="submit-container">
        <button className="submit"> Submit Answers </button>
        </div>}
        </div>
    )
}

export default QuestionsPage