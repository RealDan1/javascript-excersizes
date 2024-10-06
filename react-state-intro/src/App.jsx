import './App.css';
import Count from './components/Count';
import NameInput from './components/NameInput';
// Create the App component
function App() {
  return (
    <div className="App">
      {/* Import the count component */}
      <Count />
      <hr />
      <NameInput />
    </div>
  );
}
export default App;
