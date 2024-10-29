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

  const dispatch = useDispatch();

  const { addNoteInput, setAddNoteInput } = useState(''); // state for input of the input box

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
                checked={item.completed} // set the initial value to the status of the "completed" boolean inside the redux state slice (toDoList)
                onChange={(e) => {
                  e.target.checked //if the boolean of the checked input is true? then dispatch the check reducer else dispatch the uncheck reducer
                    ? dispatch(checkToDo({ id: item.id })) // then dispatch the check reducer
                    : dispatch(unCheckToDo({ id: item.id })); // else dispatch the uncheck reducer
                }}
              />
              <label htmlFor={key}>{item.text}</label>
              {/* <button onClick={}>Edit</button> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
