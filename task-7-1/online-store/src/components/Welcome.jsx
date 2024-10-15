import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Welcome({ user }) {
  const nav = useNavigate();

  // let logoutClicked = false;
  return (
    <div className="welcome">
      <p>Welcome {user} </p>
      <button onClick={() => nav('/', { state: { loggedOut: true } })}>
        Logout
      </button>
    </div>
  );
}
