import React from 'react';
import './footer.css'; 
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Information */}
        <div className="footer-section">
          <p>&copy; 2024 CarCare. All rights reserved.</p>
          <p>Your trusted partner for car services and maintenance.</p>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@carcare.com</p>
          <p>Phone: +91 94290 78910</p>
          <p>Address: Vesu Road, Surat City, Gujarat</p>
        </div>

        {/* Social Media Icons */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      {/* Add PNG image to the footer */}
     
    </footer>
  );
};

export default Footer;
