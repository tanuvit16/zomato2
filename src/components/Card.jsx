
import React from 'react';
import './Card.css';

const Card = ({ image, title, description, bgColor }) => {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <img src={image} alt={title} className="card-logo" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <p className="card-link">Check it out <span>▸</span></p>
    </div>
  );
};

export default Card;
