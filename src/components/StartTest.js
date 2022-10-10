export default function StartTest({ handleStartTest }) {

  return (
    <section className="testSelection">
      <div className="wrapper">

        <h1>Measure Your Knowledge on What's on the Big Screens</h1>

        <div className="testContainer">
          <div className="test">
            <div className="textContainer">
              <h3>📺 TV Shows</h3>
              <p>This test assesses a candidate's ability to know and remember little trivia fun facts about TV shows with a series of questions. Using different questions that ranges from easy to hard, this tests helps the user understand how knowledgable they are in TV media.</p>
            </div>
            
            <div className="infoContainer">
              <p>10 MCQ</p>
              <button value='0' onClick={(e) => { handleStartTest(e.target.value) }}>Start</button>
            </div>
          </div>

          <div className="test">
            <div className="textContainer">
              <h3>🎥 Movies</h3>
              <p>This test assesses a candidate's ability to know and remember little trivia fun facts about movies with a series of questions. Using different questions that ranges from easy to hard, this tests helps the user understand how knowledgable they are in movies.</p>
            </div>
            
            <div className="infoContainer">
              <p>10 MCQ</p>
              <button value='1' onClick={(e) => { handleStartTest(e.target.value) }}>Start</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// https://www.testgorilla.com/test-library/