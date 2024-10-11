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
    try {
      let response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}`
      );

      // process.env.REACT_APP_WEATHER_API_KEY
      let data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error(error);
    }
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

      {weather !== '' && (
        <>
          <h1>The weather is:</h1>
          <h2>{JSON.stringify(weather)}</h2>
        </>
      )}
    </div>
  );
}

export default App;
