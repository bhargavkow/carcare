import React from "react";
import "./cut.css"; // Optional: Create a CSS file for styling

import car7 from "../images/car7.jpeg";
import cut_img2 from "../images/cut_img2.png";
import cut_img from "../images/cut_img.png";
import cut_img4 from "../images/cut_img4.png";

const ImageDisplay = () => {
  return (
    <div className="image-container">
      <img src={cut_img4} alt="Placeholder" className="display-image1" />

      {/* <svg
        width="1440"
        height="196"
        viewBox="0 0 1440 196"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="HeroLightningClippedContainer__SVGLightningLines-sc-117g4vi-2 gySizA"
      >
        <path
          d="M-867 -37.1006L339.5 135.399L322 36.3994L2429 334.899"
          stroke="white"
        ></path>
        <path
          d="M-859 -45.1006L347.5 127.399L330 28.3994L2437 326.899"
          stroke="white"
        ></path>
      </svg> */}
    </div>
  );
};

export default ImageDisplay;
