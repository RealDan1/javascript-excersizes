import './App.css';
import Count from './components/Count.jsx';
import DisplayName from './components/DisplayName.jsx';
import AutoFocus from './components/AutoFocus.jsx';
// Create the App component
function App() {
  return (
    <div className="App">
      {/* Import the count component */}
      <Count />
      <hr />
      <DisplayName />
      <hr />
      <AutoFocus />
    </div>
  );
}
export default App;
