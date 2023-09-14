//Project Plan: 
// Button on Start screen will change our screen to QuestionScreen. Give StartScreen toggle function to show Question Screen or not.
// QuestionScreen will need data from API and will be where most of the work is done 
// So we could probably start with the Start Screen
// Dont forget to check what is inside viewData and organize it propertly within QuestionScreen
//When game is done, we should probably go back to start screen



import React from 'react'
import QuestionScreen from "./components/QuestionScreen"
import StartScreen from "./components/StartScreen"
import "./styles.css"
import { he } from "he"


function App() {

  //this state will determine if you should render the start or question screen
  const [showQuestions, setShowQuestions] = React.useState(false)

  //this function will show the question screen when the button on the start screen is pressed
  function toggleScreen() {
    setShowQuestions((prev) => (!prev))
  }

  //this state will hold the data received from the OTDB API
  const [triviaData, setTriviaData] = React.useState()

  const [question, setQuestion] = React.useState()

  const [correctAnswer, setCorrectAnswer] = React.useState()

  const [incorrectAnswers, setIncorrectAnswers] = React.useState()

  //this useEffect will fetch the data from the Open Trivia Database (OTDB)
  React.useEffect(() => {
    async function getTriviaData() {
      const res = await fetch("https://opentdb.com/api.php?amount=5")
      const data = await res.json()
      setTriviaData(data.results)
    }

    getTriviaData()

  }, [])

  function getQuestions() {
      
      setQuestion(triviaData.map((i) => {
          return (
              i.question
          )
      }))
  
      setCorrectAnswer(triviaData.map((i) => {
          return (
              i.correct_answer
          )
      }))

      setIncorrectAnswers(triviaData.map((i) => {
        return (
          i.incorrect_answers
        )
      }))
  }

  //showQuestions ? <QuestionScreen/> : <StartScreen/>

  return (
    <div>
      {
        showQuestions ? 
        <QuestionScreen triviaData={triviaData} question={question} correctAnswer={correctAnswer} incorrectAnswers={incorrectAnswers}/> : 
        <StartScreen handleClick={toggleScreen} getQuestions = {getQuestions}/>
      }
    </div>

  );
}

export default App;

