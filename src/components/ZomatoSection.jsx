import React from "react";
import "./ZomatoSection.css";

const ZomatoSection = () => {
  return (
    <div className="zomato-section">
      {/* <img src="pinklineimg.avif" className="line"/> */}
      <img src="burger.avif" alt="Burger" className="food-img burger" />
      <img src="moms.avif" alt="Momos" className="food-img momos" />
      <img src="pizza.avif" alt="Pizza" className="food-img pizza" />
      <img src="tomato.avif" alt="Tomato" className="food-img tomato" />
      <img src="mint.avif" alt="Leaf" className="food-img leaf" />
<img src="burger.avif"/>
      <div className="text-content">
        <h2>Better food for <br /> more people</h2>
        <p>
          For over a decade, we’ve enabled our<br/><br/> customers to discover new tastes,<br/>,<br/>
          delivered right to their doorstep
        </p>
      </div>
    </div>
  );
};

export default ZomatoSection;
