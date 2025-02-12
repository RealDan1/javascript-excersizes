import './App.css'
import React from 'react'
import { useState } from 'react'

function App() {
  const [toDos, setToDos] = useState([
  ])

  const handleSubmit = (event) => {
    event.preventDefault();

    //reset the form:
    event.target.reset();
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input name='addToDo' />
      

    </form>
    </>
  )
}

export default App
