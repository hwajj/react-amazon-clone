import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout(props) {
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/7191qk-xnFL.jpg'
          alt=''
          className='checkout_ad'
        />
        <div>
          <h2 className='checkout_title'>장바구니입니다</h2>
        </div>
      </div>
      <div className='checkout_right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
