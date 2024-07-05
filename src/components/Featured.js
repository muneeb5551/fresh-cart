import React from 'react';
import '../assets/css/featured.css';

const Featured = () => {
  return (
    <div className='container my-5 py-3 d-flex justify-content-between align-items-center'>
      <h1 className='featured-h1'>Featured Categories</h1>
      <div className=" d-flex gap-3 justify-content-between align-items-center">
      <button className='featured-icons btn btn-light'>
        <i class="bi bi-chevron-left"></i>
        </button>
        <button className='featured-icons btn btn-light'>
        <i class="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Featured;
