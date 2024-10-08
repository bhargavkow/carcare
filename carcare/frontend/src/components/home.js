import React, { useState, useEffect } from "react";
import "./home.css";
import Page from "./page";
import Detail from "./detail";
import About from "./about";
import Carousel from "./carousel";
import Blog from "./blog";
import Contact from "./contact";
import Footer from "./footer";


import car4 from "../images/car4.jpeg";
import car5 from "../images/car5.jpeg";
import car6 from "../images/car6.jpeg";
import car7 from "../images/car7.jpeg";
import car13 from "../images/car13.jpg";
import car14 from "../images/car14.jpg";
import car15 from "../images/car15.jpg";
import car16 from "../images/car16.jpg";
import car18 from "../images/car18.jpg";

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [car18, car14, car15];

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

 
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="carousel1">
        <div
          className="carousel-inner1"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }} 
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          ))}
        </div>
        <button className="carousel-control prev" onClick={goToPrevSlide}>
          &#10094;
        </button>
        <button className="carousel-control next" onClick={goToNextSlide}>
          &#10095;
        </button>
        <div className="carousel-text">
          <div className="book-now">BOOK NOW</div>
          <div className="title">CARCARE SERVICE</div>
          <div className="offer-container">
            <div className="offer-text">SEPTEMBER BEST OFFER</div>
            <div className="offer-text">FULL CAR SERVICES START</div>
            <div className="offer-text">FROM</div>
            <div className="price">₹ 4999/-*</div>
          </div>
        </div>
      </div>

      <Page />
      <Detail />
      <About />
      <Carousel />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default CustomCarousel;
