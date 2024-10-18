// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';

export default function TotalPrice({ totalPrice }) {
  // const location = useLocation();

  // const data = location.state;

  return totalPrice !== 0 && <h2>Total Price: {totalPrice}</h2>;
}
