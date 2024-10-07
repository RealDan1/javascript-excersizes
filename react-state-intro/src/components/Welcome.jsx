import React from 'react';
export default function Welcome({ name }) {
  return (
    <div>
      {/* Display the name value of the props object */}
      <h1>Welcome, {name}</h1>
    </div>
  );
}
