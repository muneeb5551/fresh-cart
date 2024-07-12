import React from 'react';
import '../assets/css/adds.css';
const Adds = () => {
  return (
    <div className='container d-lg-flex justify-content-between align-items-center gap-5 my-5'>
      <div className="banner-1">
        <h3 className='text-capitalize'>fruits & vegetables</h3>
        <p>Get Upto 30% Off</p>
        <div className="btn-shopnow mt-3">
    <button className='btn text-capitalize btn-dark d-flex justify-contant-between align-items-center gap-2'>shop now</button>
    
</div>
      </div>
      <div className="banner-2">
        <h3 className='text-capitalize'>Freshly Baked Buns</h3>
        <p>Get Upto 25% Off</p>
        <div className="btn-shopnow mt-3">
    <button className='btn text-capitalize btn-dark d-flex justify-contant-between align-items-center gap-2'>shop now</button>
    
</div>
      </div>
    </div>
  );
}

export default Adds;
