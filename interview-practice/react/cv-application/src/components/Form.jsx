import { useState } from 'react';
import Cv from './cv';
export default function Form() {
  const [cv, setCv] = useState({});
  const [input, setInput] = useState({ general: { name: '' }, education: { schoolName: '' } });

  //assigning the values to input:
  const handleChange = (e) => {
    const { name, value } = e.target;
    //generalName
    if (name === 'generalName') {
      setInput((prevInput) => {
        return { ...prevInput, general: { ...prevInput.general, name: value } };
      });
    }
    //school name
    else if (name === 'schoolName') {
      setInput((prevInput) => {
        return {
          ...prevInput,
          education: {
            ...prevInput.education,
            schoolName: value,
          },
        };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCv({ ...input }); //maybe change this to not mutate?
  };

  return (
    <>
      <Cv cv={cv}></Cv>
      <div id="form">
        <form onSubmit={handleSubmit}>
          <input type="text" name="generalName" value={input.general.name} onChange={handleChange} />
          <input type="text" name="schoolName" value={input.education.schoolName} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
