import React from 'react';
import '../assets/css/herocarousel.css';



const Herocarousel = () => {
  return (
    <div className='container'>

      <div id="carouselExampleAutoplaying " className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active slide-first rounded-3">
            <div className="slidefirst-content">
              <div className="slide-h6">
                <div><h6 className='text-capitalize'>opening sale discount 50%</h6></div>
              </div>
              <div className='slide-h1'>
                <h1>SuperMarket For <br></br> Fresh Grocery</h1>
              </div>
              <div className="slide-p">
                <p className='text-capitalize mb-3'>introduced a new model for online grocery shopping <br></br> and convenient home delivery</p>
              </div>
              <div className="btn-shopnow mt-3">
                <button className='btn text-capitalize btn-dark d-flex justify-contant-between align-items-center gap-2'>shop now <i class="bi bi-arrow-right-short"></i></button>
              </div>
            </div>
          </div>
          <div className="carousel-item slide-first">
            <div className="slidefirst-content">
              <div className="slide-h6">
                <div><h6 className='text-capitalize'>opening sale discount 50%</h6></div>
              </div>
              <div className='slide-h1'>
                <h1>SuperMarket For <br></br> Fresh Grocery</h1>
              </div>
              <div className="slide-p">
                <p className='text-capitalize mb-3'>introduced a new model for online grocery shopping <br></br> and convenient home delivery</p>
              </div>
              <div className="btn-shopnow mt-3">
                <button className='btn text-capitalize btn-dark d-flex justify-contant-between align-items-center gap-2'>shop now <i class="bi bi-arrow-right-short"></i></button>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Herocarousel;
