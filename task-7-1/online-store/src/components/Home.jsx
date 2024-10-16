import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [user, setUser] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const nav = useNavigate();

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="home">
      {loggedIn && user !== '' ? (
        <div className="welcome-paragraph">
          <p>Welcome {user} </p>
          <button onClick={() => nav('/')}>Logout</button>
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
