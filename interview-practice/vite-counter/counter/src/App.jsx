import React from 'react';
import {useState} from 'react';
import './App.css'

function App() {
 const [count, setCount ] = useState(0);

  return (
    <>
      <div>
        
        
      </div>
      <h1>Vite + React</h1>
      <div className="card">
       <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      </div>
      
    </>
  )
}

export default App
