
import React from 'react';
import Card from './components/Card';
import './CardFeature.css';


function CardFeature() {
  return (
    <div className="app">
      <Card
        image="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
        title="zomato"
        description="Get the app now to start ordering your favorite dishes!"
        bgColor="#fff0f0"
      />
      <Card
        image="https://blinkit.com/images/favicon192.png"
        title="blinkit"
        description="Choose from 10,000+ products & get them delivered in minutes"
        bgColor="#fff7d1"
      />
      <Card
        image="https://b.zmtcdn.com/data/o2_assets/6944913426b0059d7c635b473c72d5f31651476559.png"
        title="district"
        description="The best of events, movies, dining, and everything you love!"
        bgColor="#f5f0ff"
      />
      <Card
        image="https://b.zmtcdn.com/data/o2_assets/2e6e1bf8cf3af38b6a04846e0b33749c1655270213.png"
        title="hyerpure"
        description="Offering complete supply chain solution for your restaurant"
        bgColor="#fff0f0"
      />
    </div>
  );
}

export default CardFeature;
