import firebase from '../firebase';
import { getDatabase, ref, push } from 'firebase/database';

import { useState } from "react"

export default function DisplayResults({ score, setTestData }) {
  const [userName, setUserName] = useState('');

  //handle userInput
  const handleUserInput = (e) => {
    setUserName(e.target.value);
  }

  //check if input is valid (no special characters and longer than 1 letter)
  const isValidInput = (str) => {
    return /^[a-zA-Z\s]*$/ && str.length > 1;
  }

  const handleSubmitTest = async (e) => {
    e.preventDefault();

    const confirmation = await isValidInput(userName);

    if (confirmation) {
      //reference to db
      const database = getDatabase(firebase);
      const dbRef = ref(database);

      //push user's name & score to db
      push(dbRef, {
        'username': userName,
        'score': score
      });

      setTestData('');
    } else {
      console.log('Names must be over 1 letter long and contain no special characters.');
    }
  }

  // to do: regEx, check for no characters, special char, etc

  return (
    <div className='results'>
      <h2>You scored: {score}/10</h2>

      <p>Enter your name and submit it to our database.</p>

      <form onSubmit={(e) => { handleSubmitTest(e) }}>
        <label htmlFor="userName" className="sr-only">Name:</label>
        <input type="text" id="userName" onChange={handleUserInput} value={userName} maxLength={50} required/>

        <button>Submit Score & Leave</button>
      </form>
    </div>
  )
}