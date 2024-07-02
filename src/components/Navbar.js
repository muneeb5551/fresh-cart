import React from 'react';
import '../assets/css/navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-white container-fluid py-3">
        <div className="container d-flex justify-content-between gap-5">
          <div className="navbar-brand">
            <img src="https://freshcart.codescandy.com/assets/images/logo/freshcart-logo.svg" alt="" />
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2 nav-input py-2" type="search" placeholder="Search for products" aria-label="Search" />
            <button className="btn btn-outline-success d-flex gap-3 input-btn" type="submit"><i class="bi bi-geo-alt"></i> Location</button>
          </form>
          <div className="d-flex align-items-center justify-content-between gap-4 nav-icons">
            <h5><i class="bi bi-heart icons"></i></h5>
            <div className='nav-bagde'><span class="badge text-bg-success rounded-circle">5</span></div>
            <h5><i class="bi bi-person icons"></i></h5>
            <h5><i class="bi bi-bag-check icons"></i></h5>
            <div className='nav-bagde-2'><span class="badge text-bg-success rounded-circle">1</span></div>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
