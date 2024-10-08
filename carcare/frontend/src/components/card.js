import React, { useEffect } from 'react';
import './card.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import car4 from '../images/car4.jpeg';
import car5 from '../images/car5.jpeg';
import car6 from '../images/car6.jpeg';
import car7 from '../images/car7.jpeg';
import car8 from '../images/car8.png';
import car9 from '../images/car9.jpeg';
import car10 from '../images/car10.jpg';
import car11 from '../images/car11.png';
import car12 from '../images/car12.png';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div>
      {/* First Image Section */}
      <div className="od">
        <div className="id">
          <img
            src={car11}
            alt="Lofi Road"
            className="img2"
            data-aos="fade-right" 
          />
          <div className="h2p" data-aos="fade-left">
            <h2 className="info2h2">ENJOY YOUR LIFE AND BE HAPPY</h2>
            <p className="info2p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates, quasi? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Natus accusantium odio vero! Nisi, voluptatibus
              ducimus.
            </p>
          </div>
        </div>
      </div>

      {/* Second Image Section */}
      <div className="od">
        <div className="id">
          <div className="h2p" data-aos="fade-up">
            <h2 className="info2h2">ENJOY YOUR LIFE AND BE HAPPY</h2>
            <p className="info2p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates, quasi? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Natus accusantium odio vero! Nisi, voluptatibus
              ducimus.
            </p>
          </div>
          <img
            src={car12}
            alt="Lofi Road"
            className="img3"
            data-aos="fade-left"
          />
        </div>
      </div>

      {/* Third Image Section */}
      <div className="od">
        <div className="id">
          <img
            src={car12}
            alt="Lofi Road"
            className="img4"
            data-aos="fade-up"
          />
          <div className="h2p" data-aos="fade-right">
            <h2 className="info2h2">ENJOY YOUR LIFE AND BE HAPPY</h2>
            <p className="info2p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates, quasi? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Natus accusantium odio vero! Nisi, voluptatibus
              ducimus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
