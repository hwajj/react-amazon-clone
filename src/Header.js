import React, { useEffect, useCallback } from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header(props) {
  const [{ user, basket }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  useEffect(() => props.onHideJoin(), []);
  return (
    <div className='header'>
      <Link to='/'>
        <img className='header_logo' src='static/header_logo.png' alt='' />
      </Link>
      <div className='header_search'>
        <input type='text' className='header_searchInput' />
        <SearchIcon className='header_searchIcon' />
      </div>

      <div className='header_nav'>
        <div className='header_option'>
          <span className='header_optionLineOne'>
            {!user ? '게스트' : user.email}
          </span>
          <Link to={!user && '/login'} className='homelogin'>
            <span
              onClick={handleAuthentication}
              className='header_optionLineTwo'
            >
              {user ? '로그아웃' : '로그인'}
            </span>
          </Link>
        </div>
        <div className='header_option'>
          <span className='header_optionLineOne'>돌아가기</span>
          <Link to='/orders' className='orderlist'>
            <span className='header_optionLineTwo'>주문내역</span>
          </Link>
        </div>
        <div className='header_option'>
          <span className='header_optionLineOne'>반가워요</span>
          <span className='header_optionLineTwo'>구독과좋아요</span>
        </div>
        <Link to='/checkout'>
          <div className='header_optionBasket'>
            <ShoppingBasket />
            <span className='header_optionLineTwoheader_basketContent'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
