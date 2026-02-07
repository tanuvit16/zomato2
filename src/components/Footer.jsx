import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">Flavora</div>
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Eternal</h4>
            <p>Flavora</p>
            <p>Blinkit</p>
            <p>District</p>
            <p>Hyperpure</p>
            <p>Feeding India</p>
            <p>Investor Relations</p>
          </div>
          <div className="footer-column">
            <h4>For Restaurants</h4>
            <p>Partner With Us</p>
            <p>Apps For You</p>
          </div>
          <div className="footer-column">
            <h4>For Delivery Partners</h4>
            <p>Partner With Us</p>
            <p>Apps For You</p>
          </div>
          <div className="footer-column">
            <h4>Learn More</h4>
            <p>Privacy</p>
            <p>Security</p>
            <p>Terms of Service</p>
            <p>Help & Support</p>
            <p>Report a Fraud</p>
            <p>Blog</p>
          </div>
          <div className="footer-column">
            <h4>Social Links</h4>
            
            <div className="app-badges">
              <img src="appstore.avif" alt="App Store" />
              <img src="google.avif" alt="Google Play" />
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
            By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners<br/>
          © 2008-2025 © flavora™ Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
