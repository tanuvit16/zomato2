
import React from 'react';
import './BackgroundVideo.css';

const BackgroundVideo = () => {
  return (
    <div className="video-container">
      {/* <video autoPlay muted loop playsInline>
        <source src="/bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className='content-overlay'>
        <div className="landing-page" >
      <div className="overlay">
        <h1><strong>Flavora</strong></h1>
        <h2>India’s #1<br/> food delivery app</h2>
        <p>Experience fast & easy online ordering<br />on the Flavora app</p>
        <div className="store-buttons">
          <img src="google.avif" alt="Get it on Google Play" />
          <img src="appstore.avif" alt="Download on the App Store" />
        </div>
        <div className="scroll-down">Scroll down ↓</div>
      </div>
    </div>
      </div>
      </div>
      
  );
};

export default BackgroundVideo;
