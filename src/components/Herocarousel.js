import React from 'react';
import '../assets/css/herocarousel.css';

const Herocarousel = () => {
  return (
    <div className='container'>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div className='slide-first rounded-3'>
            <div className="slidefirst-content">
              <div className="slide-h6">
                <div><h6 className='text-capitalize'>opening sale discount 50%</h6></div>
              </div>
              <div className='slide-h1'>
                <h1>SuperMarket For <br></br> Fresh Grocery</h1>
              </div>
              <div className="slide-p">
                <p className='text-capitalize mb-3 slider-para'>introduced a new model for online grocery shopping <br></br> and convenient home delivery</p>
              </div>
              <div className="btn-shopnow mt-3">
                <button className='btn text-capitalize btn-dark slider-button d-flex justify-contant-between align-items-center gap-2'>shop now <i class="bi bi-arrow-right-short"></i></button>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div className='slide-first-2 rounded-3'>
            <div className="slidefirst-content">
              <div className="slide-h6">
                <div><h6 className='text-capitalize'>opening sale discount 50%</h6></div>
              </div>
              <div className='slide-h1'>
                <h1>SuperMarket For <br></br> Fresh Grocery</h1>
              </div>
              <div className="slide-p">
                <p className='text-capitalize mb-3 slider-para'>introduced a new model for online grocery shopping <br></br> and convenient home delivery</p>
              </div>
              <div className="btn-shopnow mt-3">
                <button className='btn text-capitalize slider-button btn-dark d-flex justify-contant-between align-items-center gap-2'>shop now <i class="bi bi-arrow-right-short"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  );
}

export default Herocarousel;
