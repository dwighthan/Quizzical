import React from "react"
import Question from "./Question"

export default function QuestionScreen({ question, correctAnswer, incorrectAnswers, triviaData }) {


    //loop through data and assign questions to a question variable and answers to an answer variable. Maybe even a difficulty variable.
    
    // organizeData()
    // const viewData = JSON.stringify(triviaData[3].category)

    return(
        <main>
            <div>
                <Question question={question} correctAnswer={correctAnswer} incorrectAnswers={incorrectAnswers}/>
            </div>
        </main>

    )
}

//decode('&#039; &quot;')
   
    // function organizeData() {
    //     setTriviaData((prevData) => prevData.map(question => (
    //             {
    //                 category: question.category, 
    //                 difficulty: question.difficulty, 
    //                 questions: question.question, 
    //                 correctAnswer: question.correctAnswer,
    //                 incorrectAnswer: question.incorrectAnswer
    //             }
    //         ))
    //     )}
    
    // organizeData()