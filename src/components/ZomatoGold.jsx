
import './ZomatoGold.css';

export default function ZomatoGold() {
  return (
    <div className="gold-container">
      <header className="gold-header">
        <img src='goldzomato.webp'/>
        <p className="subtitle">India's Top Savings <br/>Program for Food Lovers</p>
      </header>
    <h2 className='title'> GOLD BENEFITS </h2>
      <section className="benefits">
    
        <div className="benefit-items">
          <div className="benefit">
           <div className="img-div">
             <img src="percentage.webp" alt="Free Delivery" />
           </div>
            <div className='col'>
               <h3>Free Delivery</h3>
            <p>At all restaurants within 7 km</p>

            </div>
           
          </div>
          <div className="benefit">
<div className="img-div">
              <img src="scooteryel.webp" alt="Extra Off" />

</div>
            <div className='col'>
               <h3>Up to 30% extra off</h3>
            <p>At 20,000+ partner restaurants</p>

            </div>
           
          </div>
        </div>
      </section>
    </div>
  );
}
