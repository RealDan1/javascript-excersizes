import './App.css';
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  //create name state
  const [name, setName] = useState('');

  //create useRef for focus function
  const inputRef = useRef();

  //function to focus input
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //create nationality state to store after api call
  const [nationality, setNationality] = useState('');

  //function to do the api call and store the found nationality in state
  async function handlePredict() {
    //do the api fetch with name
    let response = await fetch(`https://api.nationalize.io?name=${name}`);
    let data = await response.json();
    //set nationality as the string of the first object in the country array (data can be displayed in a more user friendly manner later - this was as the task requested)
    setNationality(JSON.stringify(data.country[1]));
  }

  return (
    <div className="App">
      <label htmlFor="nameInput">Enter name here:</label>
      {/* <br /> */}
      <input
        id="nameInput"
        ref={inputRef}
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <br />
      <button className="btn btn-primary" onClick={handlePredict}>
        Predict Nationality
      </button>
      {/* display nationality only if it is not empty */}
      {nationality !== '' && (
        <>
          <h1>Your predicted nationality is:</h1>
          <h2>{nationality}</h2>
        </>
      )}
    </div>
  );
}

// Create a React app that will predict the nationality of a person given their name.
// ● You will need an auto-focused input field, a button that will trigger a function that will fetch data from the nationalize.io API: (https://api.nationalize.io?name=<Enter name here>).
// Here is an example of fetching the results for “Micheal”: https://api.nationalize.io?name=michael. After the fetch, please display the details of the first object in the country array.
// ● Please ensure to only use function components and use the useState, useEffect, and useRef hooks.
