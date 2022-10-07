import { useState } from "react"

export default function DisplayTest({ testData }) {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleNextQuestion = () => {
    // check answer

    // handle to go to the next question & reset user selected answer
    if (currQuestion <= testData.length) {
      setCurrQuestion(currQuestion++);
      setSelectedAnswer('');
    }
  }

  const handleSelected = (selectedOption) => {
    //set user's selected answer state
    setSelectedAnswer(selectedOption);

    //add one to score if it's right
    if (selectedOption === testData[currQuestion].correctAnswer) {
      setScore(score + 1);
    }
  }

  return (
    <div>
      <h2>{testData[currQuestion].question}</h2>

      <ul>
        {
          testData[currQuestion].answerOptions.map((eachAnswer, index) => {
            return (
              <li key={`option${index}`}>
                <input
                  type="radio"
                  name={currQuestion}
                  id={index}
                  value={eachAnswer}
                  onChange={(e) => { handleSelected(e.target.value) }}
                />
                <label htmlFor={index}>{eachAnswer}</label>
              </li>
            )
          })
        }
      </ul>
  
      <button >Next</button>
    </div>
  )
}