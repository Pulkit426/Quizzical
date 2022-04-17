/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react'
import { nanoid } from 'nanoid'

import Question from './Question.js'
import '../index.css'
const QuestionsPage = (props) => {
    
    const [questions,setQuestions] = useState([])
    const [dataRendered, setDataRendered] = useState(false)
    const [score,setScore] = useState(0)
    const [gameOver, setGameOver]= useState(false)

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
    
    console.table(questions)
    
    const toggle = (id,value) => {
        console.log('clicked')
        setQuestions(prevQuestions => prevQuestions.map(
             ques => {
                 if(ques.id === id){
                     ques.currentAns = value

                     if(ques.correctAns === value)
                     ques.isCorrect = true
                 }
                 return ques
             }
        ))
    }

    const submit = () => {
        const tempScore = questions.map(quiz => quiz.isCorrect).reduce((score,value) => {
            if(value)
            score++

            return score
        },0)

        setScore(tempScore)
        setGameOver(prev => !prev)
    }
    
                                      
    const questionsMapped = questions.map(
                              value => <Question
                                        qna = {value}
                                        gameOver={gameOver}
                                        toggle= {toggle} 
                                        />)
                              
   
    return (
        <div>
        {dataRendered ? questionsMapped : <h1>Questions Loading </h1>}
        {dataRendered && <div className="submit-container">
        <button className="submit" onClick={submit}> {gameOver ? "Play Again" : "Submit Answers"}
         </button>
        </div>}
        {gameOver && <div className="score"> You scored {score}/5  </div>}

        </div>
    )
}

export default QuestionsPage