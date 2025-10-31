import React from 'react';

import './LandingPage.css';



 function LandingPage() {
  return (
    <>
    
    <div className="landing-page" >
      <div className="overlay">
        <h1><strong>zomato</strong></h1>
        <h2>India’s <span>#1<br/></span> food delivery app</h2>
        <p>Experience fast & easy online ordering<br />on the Zomato app</p>
        <div className="store-buttons">
          <img src="google.avif" alt="Get it on Google Play" />
          <img src="appstore.avif" alt="Download on the App Store" />
        </div>
        <div className="scroll-down">Scroll down ↓</div>
      </div>
    </div>
    </>
    
  );
}
export default LandingPage;
