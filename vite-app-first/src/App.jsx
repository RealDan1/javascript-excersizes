import { useState } from 'react';
import Heading from './components/Heading';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Heading name="John" age={23} />
      <p>Paragraph Test</p>
      <button>A Vite standard Button</button>
      <hr />
      <Button> A Boostrap Button</Button>
      <hr />
      <Button variant="outline-secondary">a Bootstrap Outline Button</Button>
    </>
  );
}

export default App;
