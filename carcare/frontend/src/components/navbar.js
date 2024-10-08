import React, { useEffect, useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Use isLoggedIn state for clarity

  const handleLogout = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/logout/'); // Send logout request
      localStorage.removeItem("user"); // Clear user data from local storage
      alert("Logged out successfully"); // Show success message
      setIsLoggedIn(false); // Update the login state
      window.location.href = '/'; // Redirect to homepage or desired page
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  useEffect(() => {
    // Check if user is logged in based on local storage data
    const userData = localStorage.getItem("user");
    if (userData) {
      setIsLoggedIn(true); // User is logged in
    } else {
      setIsLoggedIn(false); // User is not logged in
    }
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">CARCARE</div>
      <div className="navbar__toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar__links ${isOpen ? 'open' : ''}`}>
        <li className="navbar__item"><Link to="/">Home</Link></li>
        <li className="navbar__item"><a href="#services" className="navbar__link">Service</a></li>
        <li className="navbar__item"><a href="#offer" className="navbar__link">Offer</a></li>
        <li className="navbar__item"><a href="#about" className="navbar__link">About</a></li>
        <li className="navbar__item"><a href="#brand" className="navbar__link">Brand</a></li>
        <li className="navbar__item"><a href="#blog" className="navbar__link">Blog</a></li>
        <li className="navbar__item"><a href="#contact" className="navbar__link">Contact</a></li>

        {isLoggedIn ? (
          <li className="navbar__item"><button onClick={handleLogout}>Logout</button></li>
        ) : (
          <>
            <li className="navbar__item"><Link to="/login">Login</Link></li>
            <li className="navbar__item"><Link to="/signup">Signup</Link></li>
          </>
        )}

        <li className="navbar__item"><Link to="/booking">Booking</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
