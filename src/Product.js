import React from 'react';
import './Product.css';

function Product({ id, title, image, price, rating }) {
  return (
    <div className='product'>
      <img src={image} alt='' />
      <div className='product_info'>
        <div className='product_title'>
          <p>{title}</p>
        </div>
        <p className='product_price'>
          <div>
            <small>US $</small>
            <strong>{price}</strong>
          </div>
        </p>
        <div className='product_rating'>
          {Array(rating)
            .fill()
            .map(() => (
              <p>★</p>
            ))}
        </div>
      </div>

      <button>장바구니에 담기</button>
    </div>
  );
}

export default Product;
