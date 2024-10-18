import React from 'react';
import TotalPrice from './TotalPrice';

export default function About({ totalPrice }) {
  return (
    <div className="about">
      <p>This is About</p>
      {totalPrice !== 0 && <TotalPrice totalPrice={totalPrice} />}
    </div>
  );
}
