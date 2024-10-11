import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, useRef } from 'react';

function App() {
  //declare the state variables for city and weather
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');

  //focus the input with useRef and useEffect
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //async function to do the api call and store it
  const findWeather = async () => {
    try {
      let response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}`
      );
      let data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <label htmlFor="inputCity">
        <h1>Please enter a city below:</h1>
      </label>
      <input
        id="inputCity"
        type="text"
        ref={inputRef}
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <button
        className="btn btn-primary"
        id="findWeatherButton"
        onClick={findWeather}
      >
        Find Weather
      </button>

      {city !== '' && weather != '' && (
        <div id="displayWeatherDiv">
          <h1>The weather for your city is:</h1>
          <p>Temperature(C): {JSON.stringify(weather.current.temp_c)}</p>
          <p>Description: {JSON.stringify(weather.current.condition.text)}</p>
          <p>Humidity: {JSON.stringify(weather.current.humidity)}</p>
          <p>Cloud Cover: {JSON.stringify(weather.current.cloud)}</p>
        </div>
      )}
    </div>
  );
}

export default App;
