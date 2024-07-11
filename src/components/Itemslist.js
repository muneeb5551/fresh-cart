
import React from 'react';
import Item from './Item';
import items from '../data/Things.js';

const ItemList = () => {
  return (
   <>
    <div className="item-list">
      {items.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          category={item.category}
          price={item.price}
          discountedPrice={item.discountedPrice}
          rating={item.rating}
          reviewCount={item.reviewCount}
          image={item.image}
          tags={item.tags}
        />
        
      ))}
    </div>
    
   </>
  );
};

export default ItemList;
