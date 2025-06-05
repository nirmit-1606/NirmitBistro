import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import CartIcon from './components/CartIcon';
import { ToastContainer } from 'react-toastify';
import './styles/NavBar.css';
import './styles/App.css';

function App() {
  return (
    <>
      <Router basename="/NirmitBistro">
        <nav className="navbar">
          <div className="navbar-logo">🍽️ Nirmit's Bistro</div>
          <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <CartIcon />
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
}

export default App;
