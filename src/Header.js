import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';
function Header(props) {
  return (
    <div className='header'>
      <img
        className='header_logo'
        src='https://pngimg.com/uploads/amazon/amazon_PNG25.png'
        alt=''
      />
      <div className='header_search'>
        <input type='text' className='header_searchInput' />
        <SearchIcon className='header_searchIcon' />
      </div>

      <div className='header_nav'>
        <div className='header_option'>
          <span className='header_optionLineOne'>안녕하세요</span>
          <span className='header_optionLineTwo'>로그인하세요</span>
        </div>
        <div className='header_option'>
          <span className='header_optionLineOne'>돌아가기</span>
          <span className='header_optionLineTwo'>주문내역</span>
        </div>
        <div className='header_option'>
          <span className='header_optionLineOne'>반가워요</span>
          <span className='header_optionLineTwo'>구독과좋아요</span>
        </div>
        <div className='header_optionBasket'>
          <ShoppingBasket />
          <span className='header_optionLineTwoheader_basketContent'>0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
