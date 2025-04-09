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
    } else if (name === 'studyTitle') {
      setInput((prevInput) => {
        return {
          ...prevInput,
          education: {
            ...prevInput.education,
            studyTitle: value,
          },
        };
      });
    } else if (name === 'studyDate') {
      setInput((prevInput) => {
        return {
          ...prevInput,
          education: {
            ...prevInput.education,
            studyDate: value,
          },
        };
      });
    } else if (name === 'companyName') {
      setInput((prevInput) => {
        return {
          ...prevInput,
          experience: {
            ...prevInput.experience,
            companyName: value,
          },
        };
      });
    } else if (name === 'positionTitle') {
      setInput((prevInput) => {
        return {
          ...prevInput,
          experience: {
            ...prevInput.experience,
            positionTitle: value,
          },
        };
      });
    } else if (name === 'responsibilities') {
      setInput((prevInput) => {
        return {
          ...prevInput,
          experience: {
            ...prevInput.experience,
            responsibilities: value,
          },
        };
      });
    } else if (name === 'dateFrom') {
      setInput((prevInput) => {
        return {
          ...prevInput,
          experience: {
            ...prevInput.experience,
            dateFrom: value,
          },
        };
      });
    } else if (name === 'dateUntil') {
      setInput((prevInput) => {
        return {
          ...prevInput,
          experience: {
            ...prevInput.experience,
            dateUntil: value,
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
            <h1>Input CV details:</h1>
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
            <label htmlFor="studyDate" className="label">
              Study Date:
            </label>
            <input
              id="studyDate"
              name="studyDate"
              className="input"
              type="text"
              defaultValue={input.education.studyDate}
              value={input.education.studyDate}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="companyName" className="label">
              Company Name:
            </label>
            <input
              id="companyName"
              name="companyName"
              className="input"
              type="text"
              defaultValue={input.experience.companyName}
              value={input.experience.companyName}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="positionTitle" className="label">
              Position Title:
            </label>
            <input
              id="positionTitle"
              name="positionTitle"
              className="input"
              type="text"
              defaultValue={input.experience.positionTitle}
              value={input.experience.positionTitle}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="responsibilities" className="label">
              Responsibilities:
            </label>
            <input
              id="responsibilities"
              name="responsibilities"
              className="input"
              type="text"
              defaultValue={input.experience.responsibilities}
              value={input.experience.responsibilities}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="dateFrom" className="label">
              Date From:
            </label>
            <input
              id="dateFrom"
              name="dateFrom"
              className="input"
              type="text"
              defaultValue={input.experience.dateFrom}
              value={input.experience.dateFrom}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="dateUntil" className="label">
              Date Until:
            </label>
            <input
              id="dateUntil"
              name="dateUntil"
              className="input"
              type="text"
              defaultValue={input.experience.dateUntil}
              value={input.experience.dateUntil}
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
