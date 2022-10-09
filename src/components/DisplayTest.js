import { useState } from "react"
import DisplayQuestions from "./DisplayQuestions";
import DisplayResults from "./DisplayResults";

export default function DisplayTest({ testData }) {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleNextQuestion = () => {
    //check answer
    checkAnswer(selectedAnswer);

    // handle to go to the next question & reset user selected answer
    //else lead to summary page
    if (currQuestion <= testData.length) {
      setCurrQuestion(currQuestion + 1);
      setSelectedAnswer('');
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

  return (
    <div>
      {currQuestion >= testData.length ? 
        <DisplayResults 
          score={score}
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