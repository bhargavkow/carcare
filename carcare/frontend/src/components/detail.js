import React from "react";
import "./detail.css";

import offer from "../images/offer.jpeg";
import offer2 from "../images/offer2.webp";

const App = () => {
  return (
    <div className="wrapper1" id="offer">
      <div className="main-div main-div3">
        <div className="text-content">
          <h1>TODAY'S BEST OFFER 🎉</h1>
          <p>
            WE ARE GLAD TO INFORM YOU THAT YOU GET 
            <span style={{ fontSize: '40px', color: 'red' }}> 40% OFF </span>
            ON ALL SERVICES. ENJOY THIS OFFER!!!
          </p>
        </div>
        <img src={offer2} alt="Offer" className="offer" />
      </div>
    </div>
  );
};

export default App;
