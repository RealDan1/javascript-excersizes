import React, { useState } from 'react';

export default function Balance() {
  let [balance, setBalance] = useState(0);

  const [inputAmount, setInputAmount] = useState(0);
  //function to handle the input change
  function handleInput(e) {
    setInputAmount(e.target.value);
  }
  //function to increase the balance state var by the inputAmount(which is also a state var)
  function increaseAmount() {
    setBalance(balance + Number(inputAmount));
  }
  //function to decrease the balance state var by the inputAmount(which is also a state var)
  function decreaseAmount() {
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
      <button onClick={increaseAmount}>Deposit</button>
      <button onClick={decreaseAmount}>Withdraw</button>
    </div>
  );
}
