import React from 'react';
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
      <label htmlFor="withdrawInput">Withdraw Amount: </label>
      <input
        id="withdrawInput"
        type="number"
        value={withdrawAmount}
        onChange={handleWithdrawChange}
        placeholder="Enter an amount for withdrawal"
      />

      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
}
