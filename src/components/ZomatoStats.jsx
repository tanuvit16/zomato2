import React from "react";
import "./ZomatoStats.css";

const ZomatoStats = () => {
  return (
    <div className="stats-container">
      <div className="stat-box">
        <div className="stat">
          <h3>3,00,000+</h3>
          <p>restaurants</p>
        </div>
        <img src="home.webp" alt="store" className="stat-icon" />
      </div>

      <div className="divider" />

      <div className="stat-box">
        <div className="stat">
          <h3>800+</h3>
          <p>cities</p>
        </div>
        <img src="location.avif" alt="location" className="stat-icon" />
      </div>

      <div className="divider" />

      <div className="stat-box">
        <div className="stat">
          <h3>3 billion+</h3>
          <p>orders delivered</p>
        </div>
        <img src="calender.avif" alt="order" className="stat-icon" />
      </div>
    </div>
  );
};

export default ZomatoStats;
