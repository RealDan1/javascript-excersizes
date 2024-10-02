import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <hr id="hr-nav" />
      <Hero title="Human stories & ideas"></Hero>
      <hr id="hr-footer" />
      <Footer></Footer>
    </div>
  );
}

export default App;
