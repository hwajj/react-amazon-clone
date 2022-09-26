import React from 'react';
import './Home.css';
import Product from './Product';
import { data } from './data';

function Home(props) {
  console.log(data);
  return (
    <div className='home'>
      <div className='home-container'>
        <img
          src='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61cjI7wJW0L._SX3000_.jpg'
          alt=''
          className='home_image'
        />
        <div className='home_row'>
          {data.map((e) => (
            <Product
              id={e.id}
              title={e.title}
              price={e.price}
              image={e.image}
              rating={e.rating}
              key={e.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Home);
