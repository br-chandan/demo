import React, { useState } from 'react';
import './feedback.css'; // Importing external CSS

const FeedbackPoll = () => {
  const [feedback, setFeedback] = useState(null); // State to hold feedback choice

  const handleFeedback = (choice) => {
    setFeedback(choice); // Update the feedback state when a button is clicked
  };

  return (
    <div className="Feed-main">
      <h2>How would you rate our tech support?</h2>
      {feedback === null ? (
        <div className="Feed-form">
          <button className="good" onClick={() => handleFeedback('Good')}>
            Good
          </button>
          <button className="neutral" onClick={() => handleFeedback('Neutral')}>
            Neutral
          </button>
          <button className="poor" onClick={() => handleFeedback('Poor')}>
            Poor
          </button>
        </div>
      ) : (
        <div className="thank-you-message">
          <h3>Thank you for your feedback! You rated our tech support as: {feedback}</h3>
        </div>
      )}
    </div>
  );
};

export default FeedbackPoll;
