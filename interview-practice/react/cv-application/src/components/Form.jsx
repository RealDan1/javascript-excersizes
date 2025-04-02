import { useState } from 'react';
import Cv from './cv';
export default function Form() {
  const [person, setPerson] = useState({});
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPerson(input); //maybe change this to not mutate?
  };

  return (
    <>
      <Cv person={person}></Cv>
      <div id="form">
        <form onSubmit={handleSubmit}>
          <input type="text" value={input.name} onChange={handleChange} />
          <button onSubmit={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  );
}
