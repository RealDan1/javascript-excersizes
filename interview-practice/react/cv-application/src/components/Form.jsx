import { useState } from 'react';
import Cv from './cv';
export default function Form() {
  const [cv, setCv] = useState({});
  const [input, setInput] = useState({
    general: { name: '', email: '', phone: '' },
    education: { schoolName: '', studyTitle: '', studyDate: '' },
    experience: { companyName: '', positionTitle: '', responisibilities: '', dateFrom: '', dateUntil: '' },
  });
  const [editing, setEditing] = useState(true);

  //assigning the values to input:
  const handleChange = (e) => {
    const { name, value } = e.target; // ask AI: does this call e.handleChange multiple times to deconnstruct multiple objects depending on the input field? how does it know how to distinguish between the MIRIAD of inputs: how does it get multiple changes if we make them? it looks to me like its only deconstructing ONE object per handleChange call????
    //generalName
    if (name === 'generalName') {
      setInput((prevInput) => {
        return { ...prevInput, general: { ...prevInput.general, name: value } };
      });
    }
    //school name
    else if (name === 'email') {
      setInput((prevInput) => {
        return {
          ...prevInput,
          general: {
            ...prevInput.general,
            email: value,
          },
        };
      });
    } else if (name === 'phone') {
      setInput((prevInput) => {
        return {
          ...prevInput,
          general: {
            ...prevInput.general,
            phone: value,
          },
        };
      });
    } else if (name === 'schoolName') {
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
    setEditing(false);
    setCv({ ...input }); //does not mutate with spread - ask AI what difference between using spread and not spread and which is better or even akes a difference?
  };

  return (
    <>
      <div id="form">
        {editing ? (
          <form onSubmit={handleSubmit}>
            <label htmlFor="generalName" className="label">
              Name:
            </label>
            <input
              id="generalName"
              name="generalName"
              className="input"
              type="text"
              defaultValue={input.general.name}
              value={input.general.name}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="email" className="label">
              Email:
            </label>
            <input
              id="email"
              name="email"
              className="input"
              type="email"
              defaultValue={input.general.email}
              value={input.general.email}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="phone" className="label">
              Phone Number:
            </label>
            <input
              id="phone"
              name="phone"
              className="input"
              type="text"
              defaultValue={input.general.phone}
              value={input.general.phone}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="schoolName" className="label">
              School Name:
            </label>
            <input
              id="schoolName"
              name="schoolName"
              className="input"
              type="text"
              defaultValue={input.education.schoolName}
              value={input.education.schoolName}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="studyTitle" className="label">
              Study title:
            </label>
            <input
              id="studyTitle"
              name="studyTitle"
              className="input"
              type="text"
              defaultValue={input.education.studyTitle}
              value={input.education.studyTitle}
              onChange={handleChange}
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
            <Cv cv={cv}></Cv>
            <button onClick={() => setEditing(true)}> Edit</button>
          </div>
        )}
      </div>
    </>
  );
}
