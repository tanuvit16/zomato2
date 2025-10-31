import React from "react";
import "./Download.css";

const Download = () => {
  return (
    <div className="download-section">
      <div className="download-left">
        <h2>Download the app now!</h2>
        <p>Experience seamless online ordering <br/>only on the Zomato app</p>
        <div className="store-buttons">
          <img src="google.avif" alt="Google Play" />
          <img src="appstore.avif" alt="App Store" />
        </div>
      </div>
      <div className="download-right">
        <div className="box">
           <img src="qrcode_files/3f7e2757e62fd22592b879bd56b666011742294630.png" alt="QR Code" className="qr-code" />
        <div className="text">
          <p>Scan the QR code to download<br/> the app</p>
            <div className="img-div">
          <img src="qrcode.avif"/>
        </div>

        </div>
         {/* <img src="qrcode_files/3f7e2757e62fd22592b879bd56b666011742294630.png" alt="QR Code" className="qr-code" />
        <div className="text">
          <p>Scan the QR code to download<br/> the app</p>
            <div className="img-div">
          <img src="qrcode.avif"/>
        </div> */}
        </div>
       
       
        {/* <div className="img-div">
          <img src="qrcode.avif"/>
        </div> */}
      </div>
    </div>
  );
};

export default Download;
