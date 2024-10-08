import React, { useEffect } from 'react';
import './section.css';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS CSS

import car4 from '../images/car4.jpeg';
import car23 from '../images/car23.png';
import car22 from '../images/car22.png';
import car21 from '../images/car21.svg';
import plug from '../images/plug.png';
import brake2 from '../images/brake2.png';
import filter1 from '../images/filter1.png';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,  // Adjust duration as needed
      once: false,     // Set to false to enable animations on scroll up and down
      delay: 300,      // Delay the animation by 300ms
      easing: 'ease-in-out', // Smooth easing
    });
  }, []);

  return (
    <>
      <h1 className="heading" data-aos="fade-up">BEST SERVICES</h1>
      <p className="heading2" data-aos="fade-up">Our CarCare Is Providing Best Services In Specific Parts</p>
      <div className="container">
        <div className="item" data-aos="fade-up">
          <div className="icon">
            <img src={car22} alt="Tyres" />
          </div>
          <div className="text">TIRE ROTATION</div>
        </div>

        <div className="item" data-aos="fade-up">
          <div className="icon">
            <img src={filter1} alt="Oil Filter" />
          </div>
          <div className="text">OIL & FILTER CHANGE</div>
        </div>

        <div className="item" data-aos="fade-up">
          <div className="icon">
            <img src={plug} alt="Spark Plug" />
          </div>
          <div className="text">SPARK PLUG REPLACEMENT</div>
        </div>

        <div className="item" data-aos="fade-up">
          <div className="icon">
            <img src={brake2} alt="Brake Fluid" />
          </div>
          <div className="text">BRAKE FLUID EXCHANGE</div>
        </div>
      </div>
    </>
  );
};

export default App;
