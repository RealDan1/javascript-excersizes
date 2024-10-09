import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component to deposit an amount - pull state from parent: balance, and use the balance and setBalance for calculation - object destructuring is used to pass
export default function Deposit({ balance, setBalance }) {
  // declare state var for deposit amount
  const [depositAmount, setDepositAmount] = useState(0);

  // Function to handle the deposit event change(on input change)
  function handleDepositChange(e) {
    //set the preferred deposit amount
    setDepositAmount(e.target.value);
  }

  // declare function to increase the balance by the amount
  function handleDeposit() {
    //convert input string to a number and add it to the balance
    setBalance(balance + Number(depositAmount));
  }

  return (
    <div id="deposit">
      <div className="inputGroup">
        <label htmlFor="depositInput" className="form-label">
          Deposit Amount:{' '}
        </label>
        <br />
        <input
          id="depositInput"
          type="number"
          value={depositAmount}
          onChange={handleDepositChange}
          placeholder="Enter an amount for deposit"
        />
      </div>

      <button
        type="button"
        className="btn btn-primary"
        onClick={handleDeposit}
        style={{ margin: '0px 10px', marginBottom: '3px' }}
      >
        Deposit
      </button>
    </div>
  );
}
