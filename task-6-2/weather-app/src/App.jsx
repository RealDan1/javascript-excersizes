import './App.css';
import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [city, setCity] = useState('');

  //focus the input with useRef and useEffect
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="App">
      <input
        type="text"
        ref={inputRef}
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <button>Find Weather</button>
    </div>
  );
}

export default App;

// http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.WEATHER_API_KEY}`
