import React from "react"

export default function StartScreen({ handleClick, getQuestions }) {

  function setData() {
    handleClick()
    getQuestions()
  }

    return (
      <main>
        <div>
            <h1>Quizzical</h1>
            <h3>Answer all 5 questions to win the trivia. </h3>
            <button onClick={setData}>Start Quiz</button>
        </div> 
      </main>
    )
}