import './App.css';
import { useState } from 'react';

// test data
import { quizData } from './data/quizData';

// components
import StartTest from './components/StartTest';
import DisplayTest from './components/DisplayTest';

function App() {
  const [testData, setTestData] = useState('');
  
  const handleStartTest = (testSelected) => {
    setTestData(quizData[testSelected]);
  }

  return (
    <div className="App">
    {!testData ? <StartTest handleStartTest={handleStartTest} /> : <DisplayTest testData={testData} />}
    </div>
  );
}

export default App;

// req
// landing pg of your own choice
// create 2 tests w 10 dummy mcq w submit test
// no need to display results or any calculations
// code is modular and bug free
// commit history
// add desc & pics in readme

// bonus
// add database, calculate & show results pg

// submit repo: https://coderbyte.com/question/test-taking-website-th-1qi5lphakw

//due tues