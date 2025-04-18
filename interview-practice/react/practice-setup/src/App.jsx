import './App.css';
import { Greeting, GreetingTwo } from './components/Greeting';

function ListItem(props) {
  return <li>{props.animal}</li>;
}

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
}

function App() {
  const animals = ['Lion', 'Cow', 'Snake', 'Lizard'];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}

export default App;
