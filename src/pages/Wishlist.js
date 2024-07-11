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
      <h1>My Wishlist</h1>
      <p className='wish-para'>There are 5 products in this wishlist.</p>


      <table className="table">
        <thead className='table-secondary'>
          <tr>
            <th scope="col">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
            </th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
            </th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
            </th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
            </th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>



    </div>
  );
}

export default Wishlist;
