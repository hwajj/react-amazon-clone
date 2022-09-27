import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, amount, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const addFromBasket = () => {
    dispatch({
      type: 'ADD_FROM_BASKET',
      id,
    });
  };

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id,
    });
  };
  return (
    <div className='checkoutProduct'>
      <img src={image} alt='' className='checkoutProduct_image' />
      <div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'>{title}</p>
        <p className='checkoutProduct_priceAmount'>
          <p className='checkoutProduct_price'>
            <small> $ </small>
            <strong>{price}</strong>
          </p>

          <p className='checkoutProduct_amount'>
            {!hideButton && <button onClick={removeFromBasket}>-</button>}{' '}
            <strong>{amount}</strong>
            {!hideButton && <button onClick={addFromBasket}>+</button>}
          </p>
        </p>
        <p className='checkoutProduct_sum'>
          <small> $ </small>
          <strong>{(amount * price).toFixed(2)}</strong>
        </p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
