import { useState } from 'react';
import './App.css';
import Heading from './components/Heading';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="app-container">
      <Container>
        <Heading name="John" age={23} />
        <p>Paragraph Test</p>
        <button>A Vite standard Button</button>
        <hr />
        <Button> A Bootstrap Button</Button>
        <hr />
        <Button variant="outline-secondary">a Bootstrap Outline Button</Button>
        <hr />
        <Button variant="success">a Bootstrap Success Button</Button>
        <hr />
        <Button variant="link">Link</Button>
      </Container>
    </div>
  );
}

export default App;
