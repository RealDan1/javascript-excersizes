import React from 'react';

export default function NameInput({ name, handleChange }) {
  // Create a name state object with a default value
  return (
    <div>
      <label for="nameInput">Enter Name: </label>
      <input
        onChange={(event) => handleChange(event.target.value)}
        //  Input component using onChange to update the value of the state
        id="nameInput"
        placeholder="Enter name here"
        defaultValue={name}
      />
      {/* Display the value of the userName State variable */}
      <h3> Name : {name}</h3>
    </div>
  );
}
