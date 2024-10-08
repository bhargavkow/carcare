import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./carousel.css"; // Ensure this CSS file is correctly linked

// Import your images
import carlogo1 from '../images/carlogo1.png';
import carlogo2 from '../images/carlogo2.png';
import carlogo3 from '../images/carlogo3.png';
import carlogo4 from '../images/carlogo4.png';
import carlogo5 from '../images/carlogo5.png';
import carlogo6 from '../images/carlogo6.png';
import carlogo7 from '../images/carlogo7.png';
import carlogo8 from '../images/carlogo8.png';
import carlogo9 from '../images/carlogo9.png';
import carlogo10 from '../images/carlogo10.png';
import carlogo11 from '../images/carlogo11.png';
import carlogo12 from '../images/carlogo12.png';
import carlogo13 from '../images/carlogo13.png';
import carlogo14 from '../images/carlogo14.png';
import carlogo15 from '../images/carlogo15.png';
import carlogo16 from '../images/carlogo16.png';
import carlogo17 from '../images/carlogo17.png';
import carlogo18 from '../images/carlogo18.png';
import carlogo19 from '../images/carlogo19.png';

const Carousel = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);

  const images = [
    carlogo6, carlogo18, carlogo14, carlogo15,
    carlogo1, carlogo2, carlogo3, carlogo5,
    carlogo17, carlogo7, carlogo8, carlogo9,
    carlogo10, carlogo4, carlogo11, carlogo12,
    carlogo13, carlogo18, carlogo16, carlogo19,
    carlogo8, carlogo9, carlogo10, carlogo4
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 4; 

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + imagesPerPage;
      return nextIndex >= images.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexCalc = prevIndex - imagesPerPage;
      return prevIndexCalc < 0 ? Math.max(images.length - imagesPerPage, 0) : prevIndexCalc;
    });
  };

  return (
    <>
      <h2 className="carousel-heading" id="brand" data-aos="fade-up">BRAND</h2>
      <p className="carousel-heading2" data-aos="fade-up">Our CarCare Services Providing All These Car Brand</p>

      <div className="carousel3">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${(currentIndex / imagesPerPage) * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className="carousel-item" key={index} data-aos="fade-up">
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="carousel-control next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </>
  );
};

export default Carousel;
