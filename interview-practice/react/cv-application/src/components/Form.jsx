import { useState } from 'react';
import Cv from './cv';

export default function Form() {
  const { cv, setCV } = useState([]);
  return (
    <div>
      <Cv></Cv>
    </div>
  );
}
