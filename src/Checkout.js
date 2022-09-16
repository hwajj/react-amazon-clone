import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout(props) {
  const [{ user, basket }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/7191qk-xnFL.jpg'
          alt=''
          className='checkout_ad'
        />
        <div>
          <h2 className='checkout_title'>{user?.email}의 장바구니입니다</h2>
          <div className='checkout_list'>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='checkout_right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
