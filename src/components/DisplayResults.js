import { useState } from "react"

export default function DisplayResults({ score, submitTest, setUserName }) {
  //handle userInput
  const handleUserInput = (e) => {
    setUserName(e.target.value);
  }

  return (
    <div>
      <h1>You scored: {score}/10</h1>

      <form>
        <p>Enter your name and submit it to our database:</p>
        <label htmlFor="userName" className="sr-only">Name:</label>
        <input type="text" id="userName" onChange={handleUserInput} value={userName} maxLength={20}/>

        <button onSubmit={submitTest}>Submit Score & Leave</button>
      </form>
    </div>
  )
}