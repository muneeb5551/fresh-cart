import React from 'react';
import '../assets/css/items.css';

const Items = () => {
  return (
    <div className='container d-flex justify-content-between align-content-center mb-5'>
      <div className="items-main">
        <img src="https://freshcart.codescandy.com/assets/images/category/category-baby-care.jpg" className='img-fluid' alt="" />
        <h4>Baby Care</h4>
      </div>
      <div className="items-main">
        <img src="https://freshcart.codescandy.com/assets/images/category/category-bakery-biscuits.jpg" className='img-fluid' alt="" />
        <h4>Bakery & Biscuits</h4>
      </div>
      <div className="items-main">
        <img src="https://freshcart.codescandy.com/assets/images/category/category-chicken-meat-fish.jpg" className='img-fluid' alt="" />
        <h4>Chicken,Meat & Fish</h4>
      </div>
      <div className="items-main">
        <img src="https://freshcart.codescandy.com/assets/images/category/category-pet-care.jpg" className='img-fluid' alt="" />
        <h4>Pet Care</h4>
      </div>
      <div className="items-main">
        <img src="https://freshcart.codescandy.com/assets/images/category/category-atta-rice-dal.jpg" className='img-fluid' alt="" />
        <h4>Atta ,Rice & dal</h4>
      </div>
      <div className="items-main">
        <img src="https://freshcart.codescandy.com/assets/images/category/category-instant-food.jpg" className='img-fluid' alt="" />
        <h4>Instant Foods</h4>
      </div>
    </div>
  );
}

export default Items;
