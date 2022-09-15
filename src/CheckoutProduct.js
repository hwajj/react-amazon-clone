import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

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
        <p className='checkoutProduct_price'>
          <small> $ </small>
          <strong>{price}</strong>
        </p>
        <button onClick={removeFromBasket}>장바구니에서 제거하기</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
