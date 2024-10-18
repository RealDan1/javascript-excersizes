import './App.css';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
// import TotalPrice from './components/TotalPrice';

function App() {
  let [totalPrice, setTotalPrice] = useState(0);
  // const nav = useNavigate();

  function handleTotal(price) {
    setTotalPrice((totalPrice += price));
  }
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Products handleTotal={handleTotal} totalPrice={totalPrice} />
          }
        />
        <Route path="/about" element={<About totalPrice={totalPrice} />} />
      </Routes>
    </div>
  );
}

export default App;
