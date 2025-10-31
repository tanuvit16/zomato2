import React from "react";
import "./Service.css";
 const Service= ()=>{
    return(
        <>
        <div className="container">
            <div className="text">
              
                <img src="mainlogo.png" />
                <h3>India's Top Savings Program for Food Lovers</h3>

            </div>
            <div textarea>
                
                <h2>GOLD BENEFITS</h2>

            </div>
            <div className="divider">
                <div className="left">
                    <div className="logo">
                        <img src="per.png"/>
                    </div>
                    <div className="description">
                        <h3>Free Delivery</h3>
                        <p>At all restaurants within 7 km </p>
                    </div>


                </div>
                <div className="right">
                    <div className="logo">
                        <img src="scooter.png"/>
                    </div>
                    <div className="description">
                        <h3>Up to 30% extra off</h3>
                        <p>At 20,000+ partner restaurants</p>
                    </div>

                </div>
            </div>
            <div className="image">
                <img src="goldcoin1.avif.png"/>
                <img src="goldcoin2.avif.png"/>
                <img src="goldcoin3.avif.png"/>
            </div>
        </div>


        </>
    )
 }
 export default Service