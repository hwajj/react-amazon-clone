import React, { useState, useEffect } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => navigate('/'));
  };



  const emailChangeHandler = (e) => setEmail(e.target.value);
  const passwordChangeHandler = (e) => setPassword(e.target.value);
  return (
    <div className='login'>
      <Link to='/'>
        <img className='login_logo' src='static/login_logo.png' alt='' />
      </Link>

      <div className='login_container'>
        <h1>로그인</h1>
        <form action=''>
          <h5>이메일</h5>
          <input type='text' value={email} onChange={emailChangeHandler} />
          <h5>비밀번호</h5>
          <input
            type='password'
            value={password}
            onChange={passwordChangeHandler}
          />
          <button onClick={signIn} className='login_signInButton'>
            로그인하기
          </button>
        </form>
      </div>
      <div className='login_register'>
        <h4 className='login_registerAgree'> 이 사이트에 처음이시라면 </h4>
        <button
          onClick={props.onShowJoin}

          className='login_registerButton'
        >
          회원가입
        </button>
      </div>
    </div>
  );
}

export default Login;
