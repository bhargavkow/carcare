import React, { useEffect } from 'react';
import './page.css'; 
import 'aos/dist/aos.css';
import AOS from 'aos'; 

import car13 from "../images/car13.jpg";
import part1 from "../images/part1.jpg";
import part2 from "../images/part2.jpg";


import ac from "../images/ac.webp";
import tire from "../images/tire.jpeg";
import hl from "../images/hl.jpeg";
import sp from "../images/sp.jpeg";
import bf from "../images/bf.jpeg";
import e from "../images/e.jpeg";

function Ar() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
    });
  }, []);

  return (
    <div className="page-container2" data-aos="zoom-in" id='services'>
     <div className='service-heading'>
     <h1 className="title1" data-aos="fade-down">CARCARE SERVIES</h1>
      <p className="subtitle" data-aos="fade-up">Our CarCare Services Is Best Services In All Over The <span style={{ fontSize: '30px', color: 'rgb(238, 104, 1)' }}>IN</span><span style={{ fontSize: '30px', color: 'white' }}>D</span><span style={{ fontSize: '30px', color: 'green' }}>IA </span>And Best Rating Services Center In 2023</p>

     </div>
      <div className="content2">
        <div className="image-container2" data-aos="zoom-in">
          <img src={ac} alt="" />
          <div className="info" data-aos="fade-up">
            <h3>AC REPAIRING</h3>
            <p>IN THIS SERVIES INCLUDES ALL TYPE OF AC REPAIRING</p>
          </div>
        </div>

        <div className="image-container2" data-aos="zoom-in">
          <img src={tire} alt="" />
          <div className="info" data-aos="fade-up">
            <h3>TIRE SERVICE</h3>
            <p>ALL FOUR TIRE ARE REPAIR PERTICULAR  AND CHEAKE</p>
          </div>
        </div>

        <div className="image-container2" data-aos="zoom-in">
          <img src={hl} alt="" />
          <div className="info" data-aos="fade-up">
            <h3>HEADLIGHT  RESTORATION</h3>
            <p>ALL HEADLIGHT ARE REPAIR IN THIS SERVIES INCLUDES SIDE LIGHT</p>
          </div>
        </div>



        <div className="image-container2" data-aos="zoom-in">
          <img src={sp} alt="" />
          <div className="info" data-aos="fade-up">
            <h3>SPARK PLUG REPLACEMENT</h3>
            <p>IN THIS SERVIES REPLACEMENT ALL TYPES OF SPARK PLUG</p>
          </div>
        </div>


        <div className="image-container2" data-aos="zoom-in">
          <img src={bf} alt="" />
          <div className="info" data-aos="fade-up">
            <h3>BRAKE FLUID EXCHANGE</h3>
            <p>FRONT AND BACK BOTH SIDE OF BRAKE ARE REPAIR</p>
          </div>
        </div>



        <div className="image-container2" data-aos="zoom-in">
          <img src={e} alt="" />
          <div className="info" data-aos="fade-up">
            <h3>ELECTRICAL SERVICE</h3>
            <p>ALL ELECTRICAL CONNECTION ARE CHEAKED AND REPAIR</p>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Ar;
