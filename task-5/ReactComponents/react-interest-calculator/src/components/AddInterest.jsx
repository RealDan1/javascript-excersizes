import React from 'react';
import { useState } from 'react';

export default function AddInterest() {
  const [interestPercent, setInterestPercent] = useState(10);
  return (
    <div>
      <label htmlFor="inputInterest">
        Add Interest Percentage(default is 10%)
      </label>
      <input id="inputInterest" type="number" />
      <button>Add Interest</button>
    </div>
  );
}
