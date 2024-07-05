import React from 'react';
import '../assets/css/navbarsecond.css';

const Navbarsecond = () => {
  return (
    <>
      <div className='container '>
      <nav className='d-flex align-items-center'>
        <button className="btn btn-success d-flex align-items-center justify-content-between gap-2 pl-2 department-btn"><i className="bi bi-grid"></i>All Departments</button>
        <ul className='d-flex justify-content-between align-items-center gap-3 mb-0'>
          <li className="nav-item dropdown nav-li">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Home
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown nav-li">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Shop
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li><li className="nav-item dropdown nav-li">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Stores
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li><li className="nav-item dropdown nav-li">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Mega menu
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown nav-li">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Pages
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown nav-li">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Account
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
          <li className='nav-li'>Dashboard</li>
          <li className='nav-li'>Docs</li>

        </ul>



      </nav>

    </div>
    <div className="container-fluid my-3 px-0 mx-0">
      <hr className='hr-line' />
    </div>

    </>
  
  );
}

export default Navbarsecond;
