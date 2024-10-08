import React, { useEffect } from 'react';
import './about.css';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 

import car13 from "../images/car13.jpg";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="about-container" id='about'>
      <div className="about-header" data-aos="fade-down">
        <h1>ABOUT CAR CARE SERVICES</h1>
        <p className='neon'>Providing quality car care solutions across India since 2023.</p>
      </div>

      <div className="about-content" id='about'>
        <div className="about-text" data-aos="fade-right">
          <h2>Why Choose Us?</h2>
          <p>
            At Car Care Services, we pride ourselves on delivering the best automotive services
            across the country. From routine maintenance to full car inspections, we ensure that 
            every service is handled with the utmost professionalism.
          </p>
          <p>
            Our team of certified technicians uses state-of-the-art equipment and high-quality
            products to ensure your car is in the best possible condition. Whether it's a quick oil change,
            tire alignment, or a comprehensive car detailing, we have you covered.
          </p>
        </div>
        
        <div className="about-image" data-aos="fade-left">
          <img src={car13} alt="Car Service" />
        </div>
      </div>

      
    </div>
  );
}

export default About;
