import React, { useState } from 'react';

export default function Deposit({ balance, setBalance }) {
  // declare state var for deposit amount
  const [depositAmount, setDepositAmount] = useState(0);

  // Function to handle the deposit event change
  function handleDepositChange(e) {
    setDepositAmount(e.target.value);
  }

  // declare function to increase the balance by the amount
  function handleDeposit() {
    //convert input string to a number
    setBalance(balance + Number(depositAmount));
  }

  return (
    <div>
      <button onClick={handleDeposit}>Deposit</button>
      <label htmlFor="depositInput">Deposit Amount: </label>
      <input
        id="depositInput"
        type="number"
        value={depositAmount}
        onChange={handleDepositChange}
        placeholder="Enter a number"
      />
    </div>
  );
}
