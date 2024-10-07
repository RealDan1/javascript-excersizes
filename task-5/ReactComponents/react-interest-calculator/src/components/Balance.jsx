import React, { useState } from 'react';

export default function Balance() {
  let [balance, setBalance] = useState(0);

  const [inputAmount, setInputAmount] = useState(0);
  //function to handle the input change
  function handleInput(e) {
    setInputAmount(e.target.value);
  }

  function increaseNumber() {
    setBalance(balance + Number(inputAmount));
  }
  function decreaseNumber() {
    setBalance(balance - Number(inputAmount));
  }
  return (
    <div>
      <h1>Balance:{balance} </h1>
      <input
        type="number"
        value={inputAmount}
        onChange={handleInput}
        placeholder="Enter a number"
      />
      <button onClick={increaseNumber}>Deposit</button>
      <button onClick={decreaseNumber}>Withdraw</button>
    </div>
  );
}
