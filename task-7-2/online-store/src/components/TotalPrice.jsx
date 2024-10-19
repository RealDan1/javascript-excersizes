// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';

export default function TotalPrice({ totalPrice }) {
  // const location = useLocation();

  // const data = location.state;

  return (
    //only display totalPrice if its greater than 0
    totalPrice !== 0 && (
      <div className="total-price">
        <h2>Total Price: R{totalPrice}</h2>
      </div>
    )
  );
}
