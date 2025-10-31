import React from "react";
import "./Box.css";
 const Box=  () => {
    return(
        <>
        <div className="container">
            <div className="title">
                <img src="eternal.avif"/>
                 <hr className="line" />
                <h3>POWERING INDIA'S<br/> CHANGING LIFESTYLES</h3>
                 <hr className="line" />
                <div className="subsection">
                    <div className="item1">
                        <img src="zomato.avif"/>
                        <h3>zomato</h3>
                      
                        <p>Get the app now to start<br/> ordering your favorite <br/>dishes!</p>

                        <a href="#" className="card-link">Check it out <span>▶</span></a>
                    </div>
                    <div className="item2">
                        <img src="blinkit.avif"/>
                         <h3>blinkit</h3>
                        <p>Choose from 10,000+<br/> products & get them<br/> delivered in minutes</p>
                       <a href="#" className="card-link">Check it out <span>▶</span></a>
                    </div>
                    <div className="item3">
                        <img src="district.avif"/>
                         <h3>district</h3>
                        <p>The best of events,<br/>movies,dining,and<br/> everything you love!</p>
                        <a href="#" className="card-link">Check it out <span>▶</span></a>
                    </div>
                    <div className="item4">
                        <img src="hyperpure.avif"/>
                         <h3>hyperpure</h3>
                        <p>Offering complete supply<br/> chain solution for your <br/>restaurant</p>
                        <a href="#" className="card-link">Check it out <span>▶</span></a>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )

 }
 export default Box
