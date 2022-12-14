import firebase from '../firebase';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useState, useEffect } from 'react';

export default function ScorePage() {
  const [userScores, setUserScores] = useState([]);

  useEffect(() => {
    const database = getDatabase(firebase);
    const dbRef = ref(database);

    //event listener for changes in db
    onValue(dbRef, (response) => {
      //temp array to hold user data
      const tempState = [];
      //response data
      const data = response.val();

      //push database data into temp state
      for (let firebaseKey in data) {
        tempState.push({
          key: firebaseKey,
          username: data[firebaseKey].username,
          score: data[firebaseKey].score
        })
      }

      setUserScores(tempState);
    })
  }, [])

  return(
    <div className="scores">
      <div className='wrapper'>
        <h2>Candidate Scores</h2>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>

          {userScores.map((eachUser) => {
            return (
              <tbody key={eachUser.key}>
                <tr>
                  <td>{eachUser.username}</td>
                  <td>{eachUser.score}/10</td>
                </tr>
              </tbody>
            )
          })}
        </table>
      </div>
    </div>
    
  )
}