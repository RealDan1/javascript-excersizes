import "./App.css";
import React from "react";
import { useState, useEffect } from "react";

function EditInput({ setEditing, item, setToDos }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditing(false);
    //e.target.reset?? 
  };

  //when the user types a value in - change the text field of the currently selected item
  const handleInputChange = (e) => {
    setToDos((prevTodos) => {
      return prevTodos.map((toDo) =>
        toDo.id === item.id ? { ...toDo, text: e.target.value } : toDo
      );
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          defaultValue={item?.text}
          onChange={handleInputChange}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

function App() {
  const [editing, setEditing] = useState(false);
  const [editingItem, setEditingItem] = useState(false);
  const [toDos, setToDos] = useState([
    {
      id: crypto.randomUUID(),
      text: "Gardening",
      isComplete: false,
    },
  ]);

  //function to add a new toDo
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.toDoInput.value;
    setToDos([
      ...toDos,
      {
        id: crypto.randomUUID(),
        text: value,
        isComplete: false,
      },
    ]);
    //reset the form:
    event.target.reset();
  };

  //Delete function
  const handleDelete = (id) => {
    setToDos(
      toDos.filter((item) => {
        return item.id !== id;
      })
    );
  };

  //select completed
  const handleComplete = (item) => {
    setToDos((prevTodos) => {
      return prevTodos.map((todo) => {
        return todo.id === item.id
          ? { ...todo, isComplete: !item.isComplete }
          : todo;
      });
    });
  };

  // turn editing mode on:
  const handleEdit = (id) => {
    setEditing(true);
    setEditingItem(id);
  };

  //if editing mode is changed, reload the component
  useEffect(() => {}, [editing]);
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
        {toDos?.length > 0
          ? toDos.map((item) => (
              <li id={item.id} key={item.id}>
                {editing === true && item.id === editingItem ? (
                  <EditInput
                    setEditing={setEditing}
                    item={item}
                    setToDos={setToDos}
                  />
                ) : (
                  <>
                    <input
                      type="checkbox"
                      id={item.id}
                      className="checkbox"
                      onClick={() => handleComplete(item)}
                    />
                    {item.text}
                    <button onClick={() => handleEdit(item.id)}>Edit</button>
                  </>
                )}

                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </li>
            ))
          : "Looks real empty here, add a To Do"}
      </div>
    </>
  );
}

export default App;
