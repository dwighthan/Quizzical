import React from 'react';

export default function Question({ correctAnswer, incorrectAnswers, individualQuestion }) {
 
    
    // = questions.map((question) => (
    //     decode(question)
    // ))
        
        // decode(questions)
    // const heCorrectAnswer = decode(correctAnswer)
    // const heIncorrectAnswers = decode(incorrectAnswers)
     


    return(
        <div>
            {correctAnswer}
            {incorrectAnswers}
        </div>
    )
}








    // const heCorrectAnswer = he.decode(JSON.stringify(correctAnswer))
    // const heIncorrectAnswers = he.decode(JSON.stringify(incorrectAnswers))
    
    
