import { useState } from 'react';

function Description() {
  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
    </div >
  )
}

// Feedback Component
// // feedback > 0 ? totalFeedback : "no feedback yet"
 function Feedback({ feedback }) {
  const totalFeedback = feedback.good + feedback.bad + feedback.neutral;
  const positivePercentage = totalFeedback > 0 ? (feedback.good / totalFeedback) * 100 : 0;
  return (
    <div style={{
      marginTop: "20px",
    }}>
      {totalFeedback > 0 ?
        <div>
          <h3>Good: {feedback.good}</h3>
          <h3>Bad: {feedback.bad}</h3>
          <h3>Neutral: {feedback.neutral}</h3>
          <h3>Total Feedback: {totalFeedback}</h3>
          <h3>Positive: {positivePercentage} </h3>
        </div>
        : "No feedback yet"
      }
      
    </div>
  );
}


// Options Buttons
function Options({updateFeedback, resetFeedback }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "flex-start",
      gap: "10px"
    }}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={resetFeedback}>Reset</button>
    </div>
  );
}

// useState Hook App'in içinde
function App() {
  const [feedback, setFeedback] = useState({ good: 0, bad: 0, neutral: 0});

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => {
      return {
        ...prev,
        [feedbackType]: prev[feedbackType] + 1
      }
    })
  }

    const resetFeedback = () => {
    setFeedback({ good: 0, bad: 0, neutral: 0});
  };

  return (
    <>
      {/* Description Component */}
      <Description />

      {/* Options Component */}
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}/>

      {/* Feedback Component */}
      <Feedback feedback={feedback}/>
    </>
  );
}

export default App;
