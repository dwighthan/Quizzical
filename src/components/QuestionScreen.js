import React from "react"
import Question from "./Question"
import { decode } from "he";

export default function QuestionScreen({ questionObject }) {

    const [correctAnswer, setCorrectAnswer] = React.useState()

    const [incorrectAnswers, setIncorrectAnswers] = React.useState()

    const [category, setCategory] = React.useState()

    const [question, setQuestion] = React.useState()
    
    const [difficulty, setDifficulty] = React.useState()
    
    // function assignQuestionData() {
        
    // }

    React.useEffect(() => {
        // questionObject.map((i) => {
        //     return(
        //         setCorrectAnswer(i.correctAnswer),
        //         setIncorrectAnswers(i.incorrectAnswers),
        //         setCategory(i.category),
        //         setQuestion(i.question),
        //         setDifficulty(i.difficulty)
        //     )
        // })

        setQuestion(questionObject.map((i) => (decode(i.question))))
        setCorrectAnswer(questionObject.map((i) => (decode(i.correctAnswer))))
        setIncorrectAnswers(questionObject.map((i) => (i.incorrectAnswers)))
        setCategory(questionObject.map((i) => (i.category)))
        setDifficulty(questionObject.map((i) => (i.difficulty)))
        
    }, [questionObject])
    
    // const decodedQuestion = decode(question)
    

    return(
        <main>
            <div>
                {question}
                {category}
                {difficulty}
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