import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './contact.css';

function ContactUs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="contact-container" id='contact'>
      <div className="contact-header3" data-aos="fade-down">
        <h1>CONTACT US</h1>
        <p>We're here to assist you with all your car service needs. Reach out to us for any queries or information.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info" data-aos="fade-right">
          <h2>Contact Information</h2>
          <p>Email: info@carcareservice.com</p>
          <p>Phone: +91-9876543210</p>
          <p>Location: Vesu road, Surat, Gujarat, India</p>

          <h3>Follow us on Social Media</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-x"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="contact-map" data-aos="fade-up">
        <h2>OUR MAIN LOCATION</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391797.6120635873!2d72.73737980939627!3d21.17024031326831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be08e1161ec81c5%3A0xb58a0c92fdc2c0f7!2sSurat%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sau!4v1638440641670!5m2!1sen!2sau"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
