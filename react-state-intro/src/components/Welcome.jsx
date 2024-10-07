import React from 'react';
export default function Welcome(props) {
  return (
    <div>
      {/* Display the name value of the props object */}
      <h1>Welcome, {props.name}</h1>
    </div>
  );
}
