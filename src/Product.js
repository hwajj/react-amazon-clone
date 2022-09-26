import React, { useCallback } from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = useCallback(() => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  }, [id, title, image, price, rating, dispatch]);

  return (
    <div className='product'>
      <img src={image} alt='' />
      <div className='product_info'>
        <div className='product_title'>
          <p>{title}</p>
        </div>
        <p className='product_price'>
          <small>US $</small>
          <strong>{price}</strong>
        </p>
        <div className='product_rating'>
          {Array(rating)
            .fill()
            .map(() => (
              <p>★</p>
            ))}
        </div>
      </div>

      <button onClick={addToBasket}>장바구니에 담기</button>
    </div>
  );
}

export default Product;
