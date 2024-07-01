import React from 'react';
import '../assets/css/navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-light container-fluid">
        <div className="container d-flex justify-content-between gap-5">
          <div className="navbar-brand">
            <img src="https://freshcart.codescandy.com/assets/images/logo/freshcart-logo.svg" alt="" />
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2 nav-input" type="search" placeholder="Search for products" aria-label="Search" />
            <button className="btn btn-outline-success d-flex gap-3" type="submit"><i class="bi bi-geo-alt"></i> Location</button>
          </form>
          <div className="d-flex align-items-center justify-content-between">
            <h3><i class="bi bi-heart"></i></h3>
            <h3><i class="bi bi-person"></i></h3>
            <h3><i class="bi bi-bag-check"></i></h3>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
