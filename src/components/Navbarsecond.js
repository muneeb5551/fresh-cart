import React from 'react';
import '../assets/css/navbarsecond.css';
import { Link } from 'react-router-dom';

const Navbarsecond = () => {
  return (
    <>
      <div className='container'>
        <nav className='d-flex small-none-nav'>
          <button className="btn btn-success d-flex d-none d-lg-block align-items-center justify-content-between gap-2 pl-2 department-btn"><i className="bi bi-grid m-2"></i>All Departments</button>
          <ul className='d-flex align-items-center gap-3 nav-ul-2 mb-0'>
            <li className="nav-item dropdown nav-li">
              <Link to="/" className="nav-link d-none d-lg-block" href="/" role="button">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown nav-li d-none d-lg-block">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Shop
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li><li className="nav-item dropdown nav-li d-none d-lg-block">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Stores
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li><li className="nav-item dropdown nav-li d-none d-lg-block">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Mega menu
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown nav-li d-none d-lg-block">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pages
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown nav-li d-none d-lg-block">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Account
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li>
            <li className='nav-li d-none d-lg-block'>Dashboard</li>
            <li className='nav-li d-none d-lg-block'>Docs</li>

          </ul>



        </nav>

      </div>
      <div className="container-fluid px-0 mx-0">
        <hr className='hr-line' />
      </div>

    </>

  );
}

export default Navbarsecond;
