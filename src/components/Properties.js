import React from 'react';
import '../assets/css/properties.css';



const Properties = () => {
  return (
    <div className='container my-5 py-5 d-md-flex gap-3 align-items-start'>
      <div className="properties-cards">
        <h1><i class="bi bi-clock"></i></h1>
        <h6>10 minute grocery now</h6>
        <p>Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
      </div>

      <div className="properties-cards">
        <h1><i class="bi bi-gift"></i></h1>
        <h6>Best Prices & Offers</h6>
        <p>Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.</p>
      </div>

      <div className="properties-cards">
        <h1><i class="bi bi-box"></i></h1>
        <h6>Wide Assortment</h6>
        <p>Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.</p>
      </div>

      <div className="properties-cards">
        <h1><i class="bi bi-recycle"></i></h1>
        <h6>Easy Returns</h6>
        <p>Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
      </div>
    </div>
  );
}

export default Properties;
