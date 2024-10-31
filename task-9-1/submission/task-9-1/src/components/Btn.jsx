import React from 'react';

export default function WithdrawBtn({ btnFunction, btnText, btnDescription }) {
  //values handed down to the button are the dispatch function (unique to each custom button), the description and the actual button text
  return (
    <div className="btn">
      <p>Click this button to {btnDescription}.</p>
      <button onClick={btnFunction}>{btnText}</button>
    </div>
  );
}
