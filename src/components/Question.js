import React from "react"
import { he } from "he"

export default function Question({ correctAnswer, incorrectAnswers, question }) {
    
    const heQuestion = he.decode("What is the name of the supercomputer located in the control room in &quot;Jurassic Park&quot; (1993)?")
     
    // = question.map((item) => {
    //     return (
    //         {
    //             question: he.decode(JSON.stringify(item))
    //         }
    //     )
    // })

    
    return(
        <div>
            {correctAnswer}
            {incorrectAnswers}
            {heQuestion}
        </div>
    )
}








    // const heCorrectAnswer = he.decode(JSON.stringify(correctAnswer))
    // const heIncorrectAnswers = he.decode(JSON.stringify(incorrectAnswers))
    
    
