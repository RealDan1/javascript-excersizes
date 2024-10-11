import './App.css';
import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');

  //focus the input with useRef and useEffect
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const findWeather = async () => {
    let response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}`
    );
    let data = await resonse.json();
    setWeather(data);
  };

  return (
    <div className="App">
      <input
        type="text"
        ref={inputRef}
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <button onClick={findWeather}>Find Weather</button>
      <h1>The weather is:</h1>
      <h2>{JSON.stringify(weather)}</h2>
    </div>
  );
}

export default App;
