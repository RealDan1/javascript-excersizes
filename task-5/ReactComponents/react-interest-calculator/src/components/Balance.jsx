import React, { useState } from 'react';
import Deposit from './Deposit';
import Withdraw from './Withdraw';

export default function Balance() {
  // declare state var for balance
  let [balance, setBalance] = useState(0);

  return (
    <div>
      <h1>Balance: {balance}</h1>
      <Withdraw balance={balance} setBalance={setBalance} />
      <Deposit balance={balance} setBalance={setBalance} />
    </div>
  );
}
