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

      <div className="my-5 table-main">
        <table class="table">
          <thead className=''>
            <tr className='table-secondary'>
              <th scope="col">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div>
              </th>
              <th scope="col"></th>
              <th scope="col">Product</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
              <th scope="col">Remove</th>

            </tr>
          </thead>
          <tbody>
            <tr className=''>
              <th scope="row"> <div class="form-check pt-4">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              </div></th>
              <td><img src="https://freshcart.codescandy.com/assets/images/products/product-img-18.jpg" className='img-fluid table-image' alt="" /></td>
              <td>
                <h6 className='table-h6'>Organic Banana</h6><br /><p className='table-p'>$.98 / lb</p>
              </td>
              <td><p className='table-price'>$35.00</p></td>
              <td><span class="badge rounded-pill bg-success table-status">In Stock</span></td>
              <td><button className="btn btn-success table-button">Add to Cart</button></td>
              <td className=''><p className='table-icon'><i class="bi bi-trash text-center"></i></p></td>
            </tr>
            <tr className=''>
              <th scope="row"> <div class="form-check pt-4">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              </div></th>
              <td><img src="https://freshcart.codescandy.com/assets/images/products/product-img-18.jpg" className='img-fluid table-image' alt="" /></td>
              <td>
                <h6 className='table-h6'>Organic Banana</h6><br /><p className='table-p'>$.98 / lb</p>
              </td>
              <td><p className='table-price'>$35.00</p></td>
              <td><span class="badge rounded-pill bg-danger table-status">Out of Stock</span></td>
              <td><button className="btn btn-dark table-button-dark">Contact us</button></td>
              <td className=''><p className='table-icon'><i class="bi bi-trash text-center"></i></p></td>
            </tr>
            <tr className=''>
              <th scope="row"> <div class="form-check pt-4">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              </div></th>
              <td><img src="https://freshcart.codescandy.com/assets/images/products/product-img-18.jpg" className='img-fluid table-image' alt="" /></td>
              <td>
                <h6 className='table-h6'>Organic Banana</h6><br /><p className='table-p'>$.98 / lb</p>
              </td>
              <td><p className='table-price'>$35.00</p></td>
              <td><span class="badge rounded-pill bg-success table-status">In Stock</span></td>
              <td><button className="btn btn-success table-button">Add to Cart</button></td>
              <td className=''><p className='table-icon'><i class="bi bi-trash text-center"></i></p></td>
            </tr>
            <tr className=''>
              <th scope="row"> <div class="form-check pt-4">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              </div></th>
              <td><img src="https://freshcart.codescandy.com/assets/images/products/product-img-18.jpg" className='img-fluid table-image' alt="" /></td>
              <td>
                <h6 className='table-h6'>Organic Banana</h6><br /><p className='table-p'>$.98 / lb</p>
              </td>
              <td><p className='table-price'>$35.00</p></td>
              <td><span class="badge rounded-pill bg-success table-status">In Stock</span></td>
              <td><button className="btn btn-success table-button">Add to Cart</button></td>
              <td className=''><p className='table-icon'><i class="bi bi-trash text-center"></i></p></td>
            </tr>
            <tr className=''>
              <th scope="row"> <div class="form-check pt-4">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              </div></th>
              <td><img src="https://freshcart.codescandy.com/assets/images/products/product-img-18.jpg" className='img-fluid table-image' alt="" /></td>
              <td>
                <h6 className='table-h6'>Organic Banana</h6><br /><p className='table-p'>$.98 / lb</p>
              </td>
              <td><p className='table-price'>$35.00</p></td>
              <td><span class="badge rounded-pill bg-success table-status">In Stock</span></td>
              <td><button className="btn btn-success table-button">Add to Cart</button></td>
              <td className=''><p className='table-icon'><i class="bi bi-trash text-center"></i></p></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Wishlist;
