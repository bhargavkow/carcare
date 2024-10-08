import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';  // Assuming Navbar is in the components folder
import Login from './components/login';  // Placeholder for your about page component
import Signup from './components/signup';  // Placeholder for your contact page component
import Home from './components/home';  // Placeholder for your contact page component
import Footer from './components/footer';  // Placeholder for your contact page component
import Card from './components/card';  // Placeholder for your contact page component
import Carousel from './components/carousel';  // Placeholder for your contact page component
import './index.css';
import Booking from './components/service'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/card" element={<Card/>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="/booking" element={<Booking/>} />
      </Routes>
    </Router>
  );
}

export default App;
