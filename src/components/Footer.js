import React from 'react';
import '../assets/css/footer.css';

const Footer = () => {
  return (
    <div className='container-fluid footer-back'>
      <div className="container d-lg-flex align-items-start">
        <div className="d-flex footer-main justify-content-between">
        <div className="footer-part">
            <h6>Categories</h6>
            <a href="/">Vegetable & Fruits</a>
            <a href="/">Breakfast & instant foods</a>
            <a href="/">Bakery & biscuits</a>
            <a href="/">Atta,rice & dal</a>
            <a href="/">Sauces & spread</a>
            <a href="/">Organic & gourmet</a>
            <a href="/">Baby care</a>
            <a href="/">Cleaning essentials</a>
            <a href="/">Personal care</a>
        </div>
        <div className="footer-part-down">
        <h6 className='d-none'>Categories</h6>
            <a href="/">Vegetable & Fruits</a>
            <a href="/">Breakfast & instant foods</a>
            <a href="/">Bakery & biscuits</a>
            <a href="/">Atta,rice & dal</a>
            <a href="/">Sauces & spread</a>
            <a href="/">Organic & gourmet</a>
            <a href="/">Baby care</a>
            <a href="/">Cleaning essentials</a>
        </div>
        </div>
       <div className="d-flex footer-main">
       <div className="footer-part">
            <h6>Get to know us</h6>
            <a href="/">Company</a>
            <a href="/">About</a>
            <a href="/">Blog</a>
            <a href="/">Help center</a>
            <a href="/">Our Value</a>
            
        </div>
        <div className="footer-part">
            <h6>For Consumers</h6>
            <a href="/">Payments</a>
            <a href="/">Shipping</a>
            <a href="/">Product Returns</a>
            <a href="/">FAQ</a>
            <a href="/">Shop Checkout</a>
           
        </div>
       </div>
       <div className="d-flex footer-main">
       <div className="footer-part">
            <h6>Become a Shopper</h6>
            <a href="/">Shopper Opportunities</a>
            <a href="/">Become a Shopper</a>
            <a href="/">Earnings</a>
            <a href="/">Ideas & Guides</a>
            <a href="/">New Retailers</a>
            
        </div>
        <div className="footer-part">
            <h6>Freshcart programs</h6>
            <a href="/">Freshcart programs</a>
            <a href="/">Gift Cards</a>
            <a href="/">Promos & Coupons</a>
            <a href="/">Freshcart Ads</a>
            <a href="/">Careers</a>
           
        </div>
       </div>
      </div>
      <div className="container-fluid my-3 px-0 mx-0 ">
        <hr className="hr-line2 "/>
    </div>
<div className="container d-lg-flex justify-content-between align-items-center">
<div className="d-flex gap-3">
<div className="payment-para"><p>Payment Partners</p></div>
<div className="">
    <img src="	https://freshcart.codescandy.com/assets/images/payment/amazonpay.svg" alt="" />
</div>
<div className="">
    <img src="	https://freshcart.codescandy.com/assets/images/payment/american-express.svg" alt="" />
</div>
<div className="">
    <img src="https://freshcart.codescandy.com/assets/images/payment//mastercard.svg" alt="" />
</div>
<div className="">
    <img src="	https://freshcart.codescandy.com/assets/images/payment/paypal.svg" alt="" />
</div>
<div className="">
    <img src="	https://freshcart.codescandy.com/assets/images/payment/visa.svg" alt="" />
</div>
</div>
<div className="d-lg-flex align-items-center gap-3 store-icons">
    <div className="payment-para"> <p>Get deliveries with FreshCart</p></div>
   
   <div className="d-flex justify-content-between align-items-center">
   <div className="">
        <img src="	https://freshcart.codescandy.com/assets/images/appbutton/appstore-btn.svg" className='store-icons' alt="" />
    </div>
    <div className="">
        <img src="	https://freshcart.codescandy.com/assets/images/appbutton/googleplay-btn.svg" className='store-icons' alt="" />
    </div>
   </div>
</div>

</div>
<div className="container-fluid my-3 px-0 mx-0 ">
        <hr className="hr-line2 "/>
    </div>
<div className="container d-flex last-line">
    <p>© 2022 - 2024 FreshCart eCommerce HTML Template. All rights reserved. Powered by <a href="/">Codescandy .</a></p>
</div>
    </div>
  );
}

export default Footer;
