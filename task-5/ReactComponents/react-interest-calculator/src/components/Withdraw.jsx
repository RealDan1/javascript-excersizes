import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

// Component to withdraw an amount - pull state from parent: balance, and use the balance and setBalance for calculation
export default function Withdraw({ balance, setBalance }) {
  // declare state var for withdraw amount
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  // Function to handle the withdraw event change(on input change)
  function handleWithdrawChange(e) {
    setWithdrawAmount(e.target.value);
  }

  // declare function to decrease the balance by the amount
  function handleWithdraw() {
    setBalance(balance - Number(withdrawAmount));
  }
  return (
    <div>
      <div className="inputGroup">
        {' '}
        <label htmlFor="withdrawInput" className="form-label">
          Withdraw Amount:{' '}
        </label>
        <br />
        <input
          id="withdrawInput"
          type="number"
          value={withdrawAmount}
          onChange={handleWithdrawChange}
          placeholder="Enter an amount for withdrawal"
        />
      </div>

      <button
        type="button"
        className="btn btn-primary"
        onClick={handleWithdraw}
        style={{ margin: '0px 10px', marginBottom: '3px' }}
      >
        Withdraw
      </button>
    </div>
  );
}
