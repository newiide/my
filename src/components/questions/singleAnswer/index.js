// SingleAnswerComponent.jsx
import React, { useState, useEffect } from 'react';
import './style.css';

const SingleAnswerComponent = (props) => {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [wrongAnswerCount, setWrongAnswerCount] = useState(0);
  const [wrongAnswerSelected, setWrongAnswerSelected] = useState(false);
  const [trueAnswerSelected, setTrueAnswerSelected] = useState(false);

  const radioClick = (index) => {
    setSelectedAnswerIndex(index);
    setWrongAnswerSelected(false);
  };

  const checkOnClick = () => {
    
    if (selectedAnswerIndex === props.correctAnswer) {
        setTrueAnswerSelected(true);
    } else {
      setWrongAnswerCount(wrongAnswerCount + 1);
      setWrongAnswerSelected(true); 
    }
  };

  useEffect(() => {
    if (wrongAnswerCount === 3) {
    }
  }, [wrongAnswerCount]);

  return (
    <div className='question single-answer'>
      <div><h3>{props.question}</h3></div>
      <div className='answers'>
        {props.answers.map((answer, i) => (
          <div key={i}>
            <input
              type='radio'
              name={`group-${props.question}`}
              value={i}
              checked={i === selectedAnswerIndex}
              onChange={() => radioClick(i)}
            />
            <label htmlFor={i}>{answer}</label>
          </div>
        ))}
      </div>
      <div className='check'>
      <div className={`check ${trueAnswerSelected ? 'correct' : ''}`}>
        <div className={`button ${wrongAnswerSelected ? 'wrong' : ''}`} onClick={checkOnClick}>
          check my answer
        </div>
        {wrongAnswerCount >= 3 && (
          <div className='button' onClick={() => setSelectedAnswerIndex(props.correctAnswer)}>
            show me correct answer
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default SingleAnswerComponent;
