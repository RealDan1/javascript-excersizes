import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <hr id="hr-nav" />
      {/* pass the prop to the hero component - to change the text of the hero dynamically - we can also use a variable here but I've hardcoded it for simplicity*/}
      <Hero title="Human stories & ideas"></Hero>
      <hr id="hr-footer" />
      <Footer></Footer>
    </div>
  );
}

export default App;
