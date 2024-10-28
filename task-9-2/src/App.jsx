import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToDo,
  editToDo,
  checkToDo,
  unCheckToDo,
} from './store/toDoListSlice';
import { useState } from 'react';

function App() {
  let toDoListData = useSelector((state) => state.toDoList);

  const { addNoteInput, setAddNoteInput } = useState('');

  function handleSetAddNoteInput(e) {
    setAddNoteInput(e.target.value);
  }
  return (
    <div className="App">
      <div className="heading">
        <h1>To Do's:</h1>

        <input
          id="addNoteInput"
          type="text"
          value={addNoteInput}
          onChange={handleSetAddNoteInput}
        />
      </div>
      <div className="toDoList">
        <ul>
          {toDoListData.map((item, key) => (
            <li className="noteItem" key={key}>
              <input
                type="checkbox"
                id={key}
                name={key}
                value={item.completed}
              />
              <label htmlFor={key}>{item.text}</label>
              <button>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
