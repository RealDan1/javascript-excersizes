import React from 'react';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  //auto focus the user input
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //declare user and loggedIn state variables
  const [user, setUser] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //change login state so the component re-renders and loads the welcome
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    //reset userName since user must type it in again
    setUser('');
  };

  return (
    <div className="home">
      {isLoggedIn && user !== '' ? (
        <div className="welcome-paragraph">
          <p>Welcome {user} </p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="login-container">
          <label htmlFor="login-input">User: </label>
          <input
            id="login-input"
            type="text"
            value={user}
            ref={inputRef}
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}
