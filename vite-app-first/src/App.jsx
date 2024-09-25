import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Heading from './components/Heading';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Heading name="John" age={23} />
      <p>Paragraph Test</p>
    </>
  );
}

export default App;
