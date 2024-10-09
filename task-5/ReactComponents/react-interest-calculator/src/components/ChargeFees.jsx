import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { useState } from 'react';

export default function AddFees({ balance, setBalance }) {
  const [feesPercent, setFeesPercent] = useState(0);

  //function to handle the interest input change event
  function handleFeesPercentChange(e) {
    setFeesPercent(e.target.value);
  }

  function handleFees() {
    setBalance(balance + balance * (Number(feesPercent) / 100));
  }

  return (
    <div id="addFees">
      <div className="inputGroup">
        {' '}
        <label htmlFor="inputFees" className="form-label">
          Deduct Custom Bank fees as a Percentage
        </label>
        <br />
        <input
          id="inputInterest"
          type="number"
          value={feesPercent}
          onChange={handleFeesPercentChange}
          placeholder="Add a percentage amount as a number"
        />
      </div>

      <button
        type="button"
        className="btn btn-primary"
        onClick={handleFees}
        style={{ margin: '0px 10px', marginBottom: '3px' }}
      >
        Charge custom bank fees
      </button>
      <p>or</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleFees}
        style={{ margin: '0px 10px', marginBottom: '3px' }}
      >
        Charge fixed bank fees
      </button>
    </div>
  );
}
