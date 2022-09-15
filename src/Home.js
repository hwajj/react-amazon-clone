import React from 'react';
import './Home.css';
import Product from './Product';

function Home(props) {
  return (
    <div className='home'>
      <div className='home-container'>
        <img
          src='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61cjI7wJW0L._SX3000_.jpg'
          alt=''
          className='home_image'
        />
        <div className='home_row'>
          <Product
            id='1'
            title='Google Chromecast - Streaming Device with HDMI Cable  '
            price='52.9'
            image='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51M+qQwzrdL._AC_UL640_FMwebp_QL65_.jpg'
            rating={5}
          />
          <Product
            id='3'
            title='Sponsored Ad - Seagate Desktop 8TB External Hard Drive HDD – USB 3.0 for PC, Laptop And Mac, 1-Year Rescue Service (STGY80...
                Sponsored 
                Seagate Desktop 8TB External Hard Drive HDD – USB 3.0 for PC, Laptop And Mac, 1-Year Rescue Service (STGY8000400)'
            price='180.2'
            image='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81tjLksKixL._AC_SX679_.jpg'
            rating={4}
          />
        </div>
        <div className='home_row'>
          <Product
            id='4'
            title='HP DeskJet 2755e Wireless Color All-in-One Printer with bonus 6 months Instant Ink with HP+ '
            price='153.2'
            image='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61UdeL7aO-L._AC_UL640_QL65_.jpg'
            rating={4}
          />
          <Product
            id='5'
            title='Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers'
            price='219'
            image='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71rXSVqET9L._AC_UL640_QL65_.jpg'
            rating={5}
          />
        </div>
        <div className='home_row'>
          <Product
            id='6'
            title='ASUS TUF Dash 15 (2022) Gaming Laptop, 15.6” 144Hz FHD Display, Intel '
            price='201.5'
            image='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71AGOX9MORL._AC_UL640_QL65_.jpg'
            rating={5}
          />
          <Product
            id='7'
            title='Logitech H390 Wired Headset, Stereo Headphones with Noise-Cancelling Microphone'
            price='46.2'
            image='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61CqYq+xwNL._AC_UL640_FMwebp_QL65_.jpg'
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
