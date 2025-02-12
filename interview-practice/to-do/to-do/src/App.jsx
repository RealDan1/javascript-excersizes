import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState([
    {
      id: crypto.randomUUID(),
      text: "Gardening",
      isComplete: false,
    },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.toDoInput.value;
    setToDos([
      ...toDos,
      {
        id: crypto.randomUUID,
        text: value,
        isComplete: false,
      },
    ]);
    //reset the form:
    event.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="toDoInput">
          <input
            type="text"
            name="toDoInput"
            id="toDoInput"
            placeholder="Enter To Do here"
          />
        </label>
        <button type="submit">Add To-Do</button>
      </form>
      <div className="toDos">
        {toDos.length > 0
          ? toDos.map((item) => (
              <li id={item.id}>
                <p>
                  {item.text}
                  {item.completed ? "is completed" : "is not completed"}
                </p>
              </li>
            ))
          : "Looks real empty here, add a To Do"}
      </div>
    </>
  );
}

export default App;
