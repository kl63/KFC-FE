import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <Link to="/" className="footer-logo">
            <h1>Kevin's Fried Creations</h1>
          </Link>
          <p>
            Kevin's Fried Creations is a culinary destination offering the finest fried foods with a twist. 
            From crispy chicken to innovative fried snacks, we serve delicious, flavorful dishes that satisfy 
            every craving. Our commitment to quality and customer satisfaction has made us a favorite in the 
            community. Join us for a memorable dining experience!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/delivery">Delivery</Link>
            </li>
            <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <a href="http://localhost:5174" target="_blank" rel="noopener noreferrer">Admin</a>
            </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-223-456-7890</li>
            <li>contact@kevinsfriedcreations.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Kevin's Fried Creations - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
