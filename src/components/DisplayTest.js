import { useState } from "react"
import DisplayQuestions from "./DisplayQuestions";
import DisplayResults from "./DisplayResults";

export default function DisplayTest({ testData, setTestData }) {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleNextQuestion = () => {
    //check answer
    checkAnswer(selectedAnswer);

    // handle to go to the next question & reset user selected answer
    if (currQuestion <= testData.length && selectedAnswer) {
      setCurrQuestion(currQuestion + 1);
      setSelectedAnswer('');
    } else {
      console.log('please make a selection')
    }
  }

  const handleSelected = (selectedOption) => {
    //set user's selected answer state
    setSelectedAnswer(selectedOption);
  }

  const checkAnswer = (selectedOption) => {
    //add one to score if it's right
    if (selectedOption === testData[currQuestion].correctAnswer) {
      setScore(score + 1);
    }
  }

  const submitTest = () => {
    // TO DO: Link it to DB
    
    //reset score
    setScore(0);
    //reset current question
    setCurrQuestion(0);
    //reset selected answer
    setSelectedAnswer('');
    //reset test data
    setTestData('');
  }

  return (
    <div>
      {currQuestion >= testData.length ? 
        <DisplayResults 
          score={score}
          submitTest={submitTest}
        /> 
        : 
        <DisplayQuestions 
          testData={testData}
          currQuestion={currQuestion}
          selectedAnswer={selectedAnswer}
          handleSelected={handleSelected}
          handleNextQuestion={handleNextQuestion}
        />
      }
    </div>
  )
}