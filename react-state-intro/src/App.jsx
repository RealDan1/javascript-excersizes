import './App.css';
import Count from './components/Count';
import DisplayName from './components/DisplayName.jsx';
// Create the App component
function App() {
  return (
    <div className="App">
      {/* Import the count component */}
      <Count />
      <hr />
      <DisplayName />
    </div>
  );
}
export default App;
