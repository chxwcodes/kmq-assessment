export default function DisplayQuestions({testData, currQuestion, selectedAnswer, handleSelected, handleNextQuestion}) {
  return (
    currQuestion <= testData.length ?
      <div>
        <h2>{testData[currQuestion].question}</h2>

        <div>
          <p>Select only one</p>
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
                      checked={eachAnswer === selectedAnswer}
                      onChange={(e) => { handleSelected(e.target.value) }}
                    />

                    <label htmlFor={index}>{eachAnswer}</label>
                  </li>
                )
              })
            }
          </ul>

          <button onClick={handleNextQuestion}>Next ➜</button>
        </div>
        
      </div>
      :
      null
  )
}