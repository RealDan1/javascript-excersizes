import React from 'react';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    let userLogin = user;
  };

  return (
    <div className="homepage">
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
      <label htmlFor="password-input">Password:</label>
      <input
        id="password-input"
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
