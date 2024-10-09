import React, { useState } from 'react';
import Deposit from './Deposit';

export default function Balance() {
  // declare state var for balance
  let [balance, setBalance] = useState(0);

  // declare state var for withdraw amount
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  // Function to handle the withdraw event change
  function handleWithdrawChange(e) {
    setWithdrawAmount(e.target.value);
  }

  // declare function to decrease the balance by the amount
  function handleWithdraw() {
    setBalance(balance - Number(withdrawAmount));
  }

  return (
    <div>
      <h1>Balance: {balance}</h1>

      <label htmlFor="withdrawInput">Withdraw Amount: </label>
      <input
        id="withdrawInput"
        type="number"
        value={withdrawAmount}
        onChange={handleWithdrawChange}
        placeholder="Enter a number"
      />

      <button onClick={handleWithdraw}>Withdraw</button>

      <Deposit balance={balance} setBalance={setBalance} />
    </div>
  );
}
