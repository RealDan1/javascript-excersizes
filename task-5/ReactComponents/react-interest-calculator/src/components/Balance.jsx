import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import AddInterest from './AddInterest';
import ChargeFees from './ChargeFees';
export default function Balance() {
  // declare state var for balance
  let [balance, setBalance] = useState(0);

  return (
    <div id="balance">
      <h1>Balance: R{balance}</h1>
      <hr />
      {/* the balance state is lifted to this parent component(balance) and shared between the withdraw, deposit, addInterest and chargeFees components */}
      <div className="inputContainer">
        <div className="inputItem">
          <Deposit balance={balance} setBalance={setBalance} />
        </div>
        {/* <hr /> */}
        <div className="inputItem">
          <Withdraw balance={balance} setBalance={setBalance} />
        </div>
        {/* <hr /> */}
        <div className="inputItem">
          <AddInterest balance={balance} setBalance={setBalance} />
        </div>
        {/* <hr /> */}
        <div className="inputItem">
          <ChargeFees balance={balance} setBalance={setBalance} />
        </div>
      </div>
    </div>
  );
}
