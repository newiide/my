import React, { useState, useEffect } from 'react';
import './style.css';

const isArrayEqual = (selected, correct) => {

 if (selected.length !== correct.length) {
  return false;
 } 
 return correct.filter(e => !selected.includes(e)).length === 0;
};

/**
 * 
 * @param {Object} props 
 * @param {string} props.question
 * @param {string[]} props.answers
 * @param {number[]} props.correctAnswer
 * @returns 
 */
const MultiAnswerComponent = (props) => {
    const [selectedAnswerIndices, setSelectedAnswerIndices] = useState([]);
    const [wrongAnswerSelected, setWrongAnswerSelected] = useState(0,2);
    const [trueAnswerSelected, setTrueAnswerSelected] = useState(false);
  
    const checkboxClick = (index, status) => {
      if (status) {
        setSelectedAnswerIndices([...selectedAnswerIndices, index]);
      } else {
        setSelectedAnswerIndices(selectedAnswerIndices.filter((value) => value !== index));
      }
      setWrongAnswerSelected(false);
      setTrueAnswerSelected(false);
    };
  
    const checkOnClick = () => {
      if (isArrayEqual(selectedAnswerIndices, props.correctAnswer)) {
        setTrueAnswerSelected(true);
      } else {
        setWrongAnswerSelected(true);
      }
    };
  
    const isArrayEqual = (selected, correct) => {
      if (selected.length !== correct.length) {
        return false;
      }
      return correct.filter((e) => !selected.includes(e)).length === 0;
    };
  
    useEffect(() => {
      if (selectedAnswerIndices.length === 3) {
        // Показати кнопку "show me correct answer"
      }
    }, [selectedAnswerIndices]);
  
    return (
      <div className='question multi-answer'>
        <div><h3>{props.question}</h3></div>
        <div className='answers'>
          {props.answers.map((answer, i) => (
            <div key={i}>
              <input
                type='checkbox'
                onClick={(e) => checkboxClick(i, e.currentTarget.checked)}
              />
              <label htmlFor={i}>{answer}</label>
            </div>
          ))}
        </div>
        <div className={`check ${trueAnswerSelected ? 'correct' : ''}`}>
          <div className={`button ${wrongAnswerSelected ? 'wrong' : ''}`} onClick={checkOnClick}>
            check my answer
          </div>
          {selectedAnswerIndices.length === 3 && (
            <div className='button'>
              show me correct answer
            </div>
          )}
        </div>
      </div>
    );
  };
  
export default MultiAnswerComponent;
