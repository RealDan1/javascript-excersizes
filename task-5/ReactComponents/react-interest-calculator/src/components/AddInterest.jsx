import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function AddInterest({ balance, setBalance }) {
  const [interestPercent, setInterestPercent] = useState(10);

  //function to handle the interest input change event
  function handleInterestPercentChange(e) {
    setInterestPercent(e.target.value);
  }

  function handleInterest() {
    setBalance(balance + balance * (Number(interestPercent) / 100));
  }

  return (
    <div>
      <label htmlFor="inputInterest">
        Add Interest Percentage(default is 10%)
      </label>
      <input
        id="inputInterest"
        type="number"
        value={interestPercent}
        onChange={handleInterestPercentChange}
      />
      <button onClick={handleInterest}>Add Interest</button>
      <h1>{interestPercent}</h1>
    </div>
  );
}
