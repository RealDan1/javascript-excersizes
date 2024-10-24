import React from 'react';

export default function WithdrawBtn({ btnFunction, btnText, btnDescription }) {
  return (
    <div className="btn">
      <p>Click this button to {btnDescription}.</p>
      <button onClick={btnFunction}>{btnText}</button>
    </div>
  );
}
