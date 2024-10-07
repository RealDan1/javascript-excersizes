import React, { useState } from 'react';

export default function Balance() {
  // declare state var for balance
  let [balance, setBalance] = useState(0);

  // declare state var for deposit amount
  const [depositAmount, setDepositAmount] = useState(0);

  // Function to handle the deposit event change
  function handleDepositChange(e) {
    setDepositAmount(e.target.value);
  }

  // declare state var for withdraw amount
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  // Function to handle the withdraw event change
  function handleWithdrawChange(e) {
    setWithdrawAmount(e.target.value);
  }

  // declare function to increase the balance by the amount
  function handleDeposit() {
    //convert input string to a number
    setBalance(balance + Number(depositAmount));
  }

  // declare function to decrease the balance by the amount
  function handleWithdraw() {
    setBalance(balance - Number(withdrawAmount));
  }

  return (
    <div>
      <h1>Balance: {balance}</h1>

      <label htmlFor="depositInput">Deposit Amount: </label>
      <input
        id="depositInput"
        type="number"
        value={depositAmount}
        onChange={handleDepositChange}
        placeholder="Enter a number"
      />

      <button onClick={handleDeposit}>Deposit</button>

      <label htmlFor="withdrawInput">Withdraw Amount: </label>
      <input
        id="withdrawInput"
        type="number"
        value={withdrawAmount}
        onChange={handleWithdrawChange}
        placeholder="Enter a number"
      />

      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
}
