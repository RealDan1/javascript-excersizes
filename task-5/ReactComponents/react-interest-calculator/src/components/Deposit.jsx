import React, { useState } from 'react';

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
    <div>
      <label htmlFor="depositInput">Deposit Amount: </label>
      <input
        id="depositInput"
        type="number"
        value={depositAmount}
        onChange={handleDepositChange}
        placeholder="Enter a number"
      />
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
}
