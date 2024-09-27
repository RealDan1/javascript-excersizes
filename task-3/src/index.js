import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// create a new date object
const date = new Date().toLocaleString();

root.render(
  <StrictMode>
    <div className="App">
      <a
        href="https://www.linkedin.com/in/daneel-van-der-merwe-518062238/"
        target="_blank"
      >
        <button>LinkedIn</button>
      </a>
      <hr />
      <h1>{date}</h1>
      <hr />
      <h2>Advantages of Libraries and Frameworks:</h2>
      <ul>
        <li>
          React (and other frameworks/libraries) make coding less tedious than
          using vanilla JS because it is declarative. It lets you say what you
          want the UI to look like and then react handles the how to do it part.
          Writing vanilla JS as a beginner would normally take much more work.
        </li>

        <li>
          React lets you split your UI into small, reusable pieces called
          components, so you don’t have to write everything in one big file.
          Which makes it easier to maintain and update the code.
        </li>
        <li>
          You can create components and use them again and again without
          rewriting the same code.
        </li>
        <li>
          Frameworks and libraries provide predefined workflow methods and
          templates so you can focus less on the code and more on what you want
          the end design to look like.
        </li>
        <li>
          React for example has effective ways of managing the state of a
          website, so you can make pages dynamic more easily than if you where
          to use vanilla JS.
        </li>

        <li>
          Frameworks and Libraries make it easier to handle manage large scale
          projects. It allows modular collaboration and updating of the code.
        </li>
        <li>
          Many libraries provide support for integrating other libraries and
          frameworks (e.g. bootstrap inside of react) that provide even further
          workflow enhancements.
        </li>
      </ul>
    </div>
  </StrictMode>
);
