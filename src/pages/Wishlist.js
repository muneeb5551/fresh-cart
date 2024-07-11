import React from 'react';
import '../assets/css/pages/wishlist.css';
const Wishlist = () => {
  return (
    <div className='container'>
      <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a className='bc-anker' href="/">Home</a></li>
    <li className="breadcrumb-item"><a className='bc-anker' href="/">Shop</a></li>
    <li className="breadcrumb-item active" aria-current="page">My Wishlist</li>
  </ol>
</nav>
    </div>
  );
}

export default Wishlist;
