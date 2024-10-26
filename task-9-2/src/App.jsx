import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

let toDoArray = ['write something', 'drink something'];

function App() {
  return (
    <div className="App">
      <div className="heading">
        <h1>To Do's:</h1>
      </div>
      <div className="toDoList">
        <ul>
          {toDoArray.map((item, key) => (
            <li key={key}>
              <input type="checkbox" id={key} name={key} />
              <label htmlFor="vehicle1">{item}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
