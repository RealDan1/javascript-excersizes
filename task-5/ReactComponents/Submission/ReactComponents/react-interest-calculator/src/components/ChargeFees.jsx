import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { useState } from 'react';

export default function AddFees({ balance, setBalance }) {
  const [feesPercent, setFeesPercent] = useState(0);

  //function to handle the fees input change event
  function handleFeesPercentChange(e) {
    setFeesPercent(e.target.value);
  }
  //function to deduct the fees from the balance
  function handleFees() {
    // make the input a number and round the balance to two decimals
    setBalance(
      Math.round((balance - balance * (Number(feesPercent) / 100)) * 100) / 100
    );
  }

  //function to handle the fixed bank fee deduction (R10)
  function handleFixedFees() {
    setBalance(balance - 10);
  }

  return (
    <div id="addFees">
      <div className="inputGroup">
        {' '}
        <label htmlFor="inputFees" className="form-label">
          Deduct custom bank fee as a percentage
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
        style={{ margin: '0px 10px 3px 10px' }}
      >
        Charge custom bank fee (%)
      </button>
      <p>or</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleFixedFees}
        style={{ margin: '0px 10px 3px 10px' }}
      >
        Charge fixed bank fee (R10)
      </button>
    </div>
  );
}
