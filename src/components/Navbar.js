import React from 'react';
import '../assets/css/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-white container-fluid py-lg-3">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="navbar-brand nav-bara-none">
            <Link to="/"><img src="https://freshcart.codescandy.com/assets/images/logo/freshcart-logo.svg" alt="" /></Link>
          </div>
          <form className="d-flex justify-content-around nav-search-bar" role="search">
            <input className="form-control me-2 nav-input py-2" type="search" placeholder="Search for products" aria-label="Search" />
            <button className="btn btn-outline-success d-flex gap-3 input-btn d-none d-md-block" type="submit"><i className="bi bi-geo-alt"></i> Location</button>
          </form>
          <div className="d-flex align-items-center justify-content-between gap-lg-4 nav-icons">
            <Link to="/Wishlist"><h5><i className="bi bi-heart icons"></i></h5></Link>
            <div className='nav-bagde'><span className="badge text-bg-success rounded-circle">5</span></div>
            {/* ******************** */}
            {/* /* //person-icon */}
            <button type="button" className="button-nav" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              <h5><i className="bi bi-person icons btn"></i></h5>
            </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-2" id="staticBackdropLabel">Sign Up</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <label for="inputPassword5" className="form-label">Name</label>
                    <input type="text " id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />

                    <label for="inputPassword5" className="form-label">Email</label>
                    <input type="text" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />

                    <label for="inputPassword5" className="form-label">Password</label>
                    <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
                    <div id="passwordHelpBlock" className="form-text">
                      By Signup, you agree to our <a className='text-decoration-none' href="/">Terms of Service</a> & <a className='text-decoration-none' href="/">Privacy Policy</a>
                    </div>

                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
            {/* ************* */}
            {/* //bag-icon********8 */}
            <button className="button-nav" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
              <h5><i className="bi bi-bag-check icons"></i></h5>
            </button>
            <div className="offcanvas offcanvas-end nav-barcanvas-width" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
              <div className="offcanvas-header py-0">
                <div className=" d-flex flex-column">
                  <h3 className="offcanvas-title" id="offcanvasScrollingLabel">Shop Cart</h3>
                  <p className='my-1'>Location in 45679</p>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body py-0">
                <hr className='' />
                <div className="alert alert-danger py-2 my-1" role="alert">
                  You’ve got FREE delivery. <a href="/" className='alert-link'>Start checkout now!</a>
                </div>
                <hr className='' />
                {/* <<<<<<<<<<>>>>>>>>>>></> */}
                <div className="main-items-canvas d-flex justify-content-between align-items-center">
                  <div className="mic-img"><img src="https://freshcart.codescandy.com/assets/images/products/product-img-1.jpg" alt="" /></div>
                  <div className="name-item">
                    <h6>Haldiram's Sev Bhujia</h6>
                    <p>.98 / lb</p>
                    <div className="d-flex align-items-center gap-1">
                      <a href="/" className='text-success'><i className="bi bi-trash"></i></a>
                      <p>Remove</p>
                    </div>
                  </div>
                  <div className="add-less-main d-flex">
                    <div className="less-div">
                      <p>-</p>
                    </div>
                    <div className="less-div">
                      <p>1</p>
                    </div>
                    <div className="less-div">
                      <p>+</p>
                    </div>
                  </div>
                  <div className="item-pkr">
                    <p>$5.00</p>
                  </div>
                </div>
                {/* <<<<<<<<<<>>>>>>>>>>></> */}
                <hr className='' />
                {/* <<<<<<<<<<>>>>>>>>>>></> */}
                <div className="main-items-canvas d-flex justify-content-between align-items-center">
                  <div className="mic-img"><img src="https://freshcart.codescandy.com/assets/images/products/product-img-1.jpg" alt="" /></div>
                  <div className="name-item">
                    <h6>Haldiram's Sev Bhujia</h6>
                    <p>.98 / lb</p>
                    <div className="d-flex align-items-center gap-1">
                      <a href="/" className='text-success'><i className="bi bi-trash"></i></a>
                      <p>Remove</p>
                    </div>
                  </div>
                  <div className="add-less-main d-flex">
                    <div className="less-div">
                      <p>-</p>
                    </div>
                    <div className="less-div">
                      <p>1</p>
                    </div>
                    <div className="less-div">
                      <p>+</p>
                    </div>
                  </div>
                  <div className="item-pkr">
                    <p>$5.00</p>
                  </div>
                </div>
                {/* <<<<<<<<<<>>>>>>>>>>></> */}
                <hr className='' />
                {/* <<<<<<<<<<>>>>>>>>>>></> */}
                <div className="main-items-canvas d-flex justify-content-between align-items-center">
                  <div className="mic-img"><img src="https://freshcart.codescandy.com/assets/images/products/product-img-1.jpg" alt="" /></div>
                  <div className="name-item">
                    <h6>Haldiram's Sev Bhujia</h6>
                    <p>.98 / lb</p>
                    <div className="d-flex align-items-center gap-1">
                      <a href="/" className='text-success'><i className="bi bi-trash"></i></a>
                      <p>Remove</p>
                    </div>
                  </div>
                  <div className="add-less-main d-flex">
                    <div className="less-div">
                      <p>-</p>
                    </div>
                    <div className="less-div">
                      <p>1</p>
                    </div>
                    <div className="less-div">
                      <p>+</p>
                    </div>
                  </div>
                  <div className="item-pkr">
                    <p>$5.00</p>
                  </div>
                </div>
                {/* <<<<<<<<<<>>>>>>>>>>></> */}
                <hr className='' />
                <div className="canvs-btn d-flex justify-content-between align-items-center">
                  <button className="btn btn-success">Continue Shopping</button>
                  <button className="btn btn-dark">Add Cart</button>
                </div>
              </div>
            </div>
            {/* ***************** */}
            <div className='nav-bagde-2'><span className="badge text-bg-success rounded-circle">1</span></div>
          </div>
          {/* //mobile-screen-offcanvas */}
          <div className="d-sm-block d-md-none">
            {/* /* <!-- Second Offcanvas Trigger --> */}
            <h5 className="" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample2" aria-controls="offcanvasExample2">
              <i class="bi bi-list"></i>
            </h5> 

            {/* <!-- Second Offcanvas --> */}
            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample2" aria-labelledby="offcanvasExample2Label">
              <div className="offcanvas-header">
                <div className="offcanvas-title" id="offcanvasExample2Label">
                  <img src="https://freshcart.codescandy.com/assets/images/logo/freshcart-logo.svg" alt="" />
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <form className="" role="search">
                  <input className="form-control me-2 py-2" type="search" placeholder="Search for products" aria-label="Search" />
                  <div class="d-grid gap-2 col-12 mx-auto">
                    <button class="btn btn-outline-succes input-btn d-flex gap-3 justify-content-center align-items-center my-2 py-2" type="button"><i className="bi bi-geo-alt"></i> Location</button>
                  </div>
                </form>
                <div class="d-grid gap-2 col-12 mx-auto">
                  <button class="btn btn-success department-btn d-flex gap-3 justify-content-center align-items-center my-2 py-2" type="button"><i className="bi bi-grid"></i>All Departments</button>
                </div>
                <div className="my-2 mbl-list">
                  <h5>Home</h5>
                  <hr className='my-2' />
                  <h5>Shops</h5>
                  <hr className='my-2' />
                  <h5>Stores</h5>
                  <hr className='my-2' />
                  <h5>Mega menu</h5>
                  <hr className='my-2' />
                  <h5>Pages</h5>
                  <hr className='my-2' />
                  <h5>Dashboard</h5>
                  <hr className='my-2' />
                </div>
              </div>
            </div>
          </div> 

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
