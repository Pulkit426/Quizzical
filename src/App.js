import React, {useState} from 'react'
import Home from './components/Home'
import QuestionsPage from './components/QuestionsPage'
import './index.css'

const App = () => {
    const [quiz, setquiz] = useState(false)
    
    const start = () => {
        setquiz(true)
    }
    
    
   return (
     <div>
    {quiz ? <QuestionsPage /> : <Home start={start} />}
    </div>
   )  
}

export default App