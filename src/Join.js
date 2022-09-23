import React, { useState } from 'react';
import { auth } from './firebase';
import './Join.css';
import { Link, useNavigate } from 'react-router-dom';
import Modal from './Modal';
import { useEffect } from 'react';
import { useCallback } from 'react';

function Join(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');
  const [passwordValidate, setPasswordValidate] = useState(false);
  const emailChangeHandler = (e) => setEmail(e.target.value);
  const passwordChangeHandler = useCallback(
    (e) => setPassword(e.target.value),
    [password]
  );
  const secondPasswordChangeHandler = useCallback(
    (e) => {
      setSecondPassword(() => e.target.value);
      setOnInsert(true);
    },
    [password, secondPassword]
  );

  const register = (e) => {
    if (email && passwordValidate) {
      e.preventDefault();
      auth.createUserWithEmailAndPassword(email, password).then((auth) => {});
      props.onClose();
      navigate('/');
    }
  };

  const [onInsert, setOnInsert] = useState(false);
  useEffect(() => {
    if (password !== secondPassword) {
      setPasswordValidate(false);
    } else {
      setPasswordValidate(true);
    }
  }, [password, secondPassword]);
  return (
    <Modal onClose={props.onClose}>
      <Link to='/'>
        <img className='login_logo' src='static/login_logo.png' alt='' />
      </Link>
      <div className='login_container'>
        <h1>회원가입</h1>
        <form action=''>
          <h5>이메일</h5>
          <input type='text' value={email} onChange={emailChangeHandler} />
          <h5>비밀번호</h5>
          <input
            className=''
            type='password'
            value={password}
            onChange={passwordChangeHandler}
          />
          <h5>비밀번호 확인</h5>
          {!passwordValidate && onInsert && (
            <span>확인 비밀번호가 다릅니다</span>
          )}
          <input
            className={`${!passwordValidate ? 'invalid' : ''}`}
            type='password'
            value={secondPassword}
            onChange={secondPasswordChangeHandler}
          />
        </form>
        <button onClick={register} className='login_signInButton'>
          가입하기
        </button>
      </div>
    </Modal>
  );
}

export default Join;
