import React from 'react';
import { useState } from 'react';
export default function NameInput() {
  // Create a name state object with a default value
  const [userName, setUserName] = useState('');
  return (
    <div>
      <label for="nameInput">Enter Name: </label>
      <input
        onChange={(event) => setUserName(event.target.value)}
        //  Input component using onChange to update the value of the state
        id="nameInput"
        placeholder="Enter name here"
        defaultValue={userName}
      />
      {/* Display the value of the userName State variable */}
      <h3> Name : {userName}</h3>
    </div>
  );
}
