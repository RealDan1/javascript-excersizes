import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Welcome from './Welcome';

export default function Home() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [user, setUser] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="home">
      {loggedIn && user !== '' ? (
        <Welcome user={user} />
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
