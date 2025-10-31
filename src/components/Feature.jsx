import React from "react";
import "./Feature.css";
const Feature = () => {
  return (
    <>
      <div className="container">
        <div className="title">
          <h2>
            What's waiting for you
            <br /> on the app?
          </h2>
          <p>
            Our app is packed with features that
            <br /> enable you to experience food <br />
            delivery like never before
          </p>
        </div>
        {/* <div className="description">
                <p>Our app is packed with features that enable you to <br/>experience food delivery like never before</p>
            </div> */}
        <div className="imagebox">
          <div className="leftimg">
            <div className="img">
              <img src="healthy.avif" alt="" />
              Healthy
            </div>
            <div className="img">
              {" "}
              <img src="veg.avif" alt="" />
              <br />
              Veg Mode
            </div>
            <div className="img">
              {" "}
              <img src="party.avif" alt="" />
              <br />
              Plan a Party
            </div>
            <div className="img">
              {" "}
              <img src="giftcard.avif" alt="" />
              <br />
              Gift Card
            </div>
          </div>
          <div className="centerimg">
            <div className="imgcenter">
              <div className="img-div">
                <img src="phone.avif" alt="" />
              </div>
              <div className="middle">
                <div className="card-container">
                 <div className="img-div">
                     <img src="schedule.webp" />
                 </div>
                  <p className="title">
                    Schedule
                    your order
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rightimg">
            <div className="img">
              <img src="food.avif" alt="" /> Gourmet
            </div>
            <div className="img">
              <img src="offer.avif" alt="" />
              offers
            </div>
            <div className="img">
              <img src="train.avif" alt="" />
              Food on Train
            </div>
            <div className="img">
              <img src="collections.avif" alt="" />
              Collection
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Feature;
