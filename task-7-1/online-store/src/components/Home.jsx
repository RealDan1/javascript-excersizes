import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Welcome from './Welcome';

export default function Home() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [user, setUser] = useState('');

  let loginClicked = false;

  const handleLogin = () => {
    loginClicked = true;
  };

  return (
    <div className="home">
      {loginClicked && user !== '' ? (
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
