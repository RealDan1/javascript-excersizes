import { useState } from 'react';
import Heading from './components/Heading';
import 'bootstrap/dist/css/bootstrap.min.css';

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
