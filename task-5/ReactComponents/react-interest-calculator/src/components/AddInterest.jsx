import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { useState } from 'react';

export default function AddInterest({ balance, setBalance }) {
  const [interestPercent, setInterestPercent] = useState(0);

  //function to handle the interest input change event
  function handleInterestPercentChange(e) {
    setInterestPercent(e.target.value);
  }

  function handleInterest() {
    // add the interest amount rounded to two decimals
    setBalance(balance + balance * (Number(interestPercent) / 100).toFixed(2));
  }

  function handleFixedInterest() {
    // add the interest amount rounded to two decimals
    setBalance(balance + (balance * (10 / 100)).toFixed(2));
  }

  return (
    <div id="addInterest">
      <div className="inputGroup">
        {' '}
        <label htmlFor="inputInterest" className="form-label">
          Add Interest Percentage
        </label>
        <br />
        <input
          id="inputInterest"
          type="number"
          value={interestPercent}
          onChange={handleInterestPercentChange}
          placeholder="Add a percentage amount as a number"
        />
      </div>

      <button
        type="button"
        className="btn btn-primary"
        onClick={handleInterest}
        style={{ margin: '0px 10px', marginBottom: '3px' }}
      >
        Add Custom Interest
      </button>
      <p>or</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleFixedInterest}
        style={{ margin: '0px 10px 3px 10px' }}
      >
        Add Fixed Interest(10%)
      </button>
    </div>
  );
}
