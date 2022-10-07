import { useState } from "react"

export default function StartTest() {
  const [testSelected, setTestSelected] = useState('');

  const handleTestSelected = (e) => {
    setTestSelected(e.target.value);
  }

  return (
    <div>
      <h1>Measure your knowledge on what's on the big screens</h1>

      <div className="tvTest">
        <h2>Tv Shows</h2>
        <p>This test assesses a candidate's ability to know and remember little trivia fun facts about TV shows with a series of 10 multiple choice questions. Using different questions that ranges from easy to hard, this tests helps the user understand how knowledgable they are to TV media.</p>
        <button value='tvTest' onClick={handleTestSelected}>Start</button>
      </div>

      <div className="movieTest">
        <h2>Movies</h2>
        <p>This test assesses a candidate's ability to know and remember little trivia fun facts about movies with a series of 10 multiple choice questions. Using different questions that ranges from easy to hard, this tests helps the user understand how knowledgable they are to movies.</p>
        <button value='movieTest' onClick={handleTestSelected}>Start</button>
      </div>
    </div>
  )
}

// https://www.testgorilla.com/test-library/