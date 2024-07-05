// src/components/Item.js
import React from 'react';

const Item = ({ name, category, price, discountedPrice, rating, reviewCount, image, tags }) => {
  return (
    <div className="item-card">
      {tags.includes("Sale") && <div className="tag sale">Sale</div>}

      {tags.includes("Hot") && <div className="tag hot">Hot</div>}
      {tags.includes("14%") && <div className="tag discount">14%</div>}
      <img src={image} alt={name} className="item-image" />
      <div className="item-details">
        <p className="category">{category}</p>
        <h3 className="name">{name}</h3>
        <div className="rating">
          {Array(Math.round(rating)).fill().map((_, i) => (
            <span className='star' key={i}><i class="bi bi-star-fill"></i></span>
          ))} ({reviewCount})
        </div>
        <p className="price">
          ${discountedPrice} <span className="original-price">${price}</span>
        </p>
        <button className="add-button">+ Add</button>
      </div>
    </div>
  );
};

export default Item;
