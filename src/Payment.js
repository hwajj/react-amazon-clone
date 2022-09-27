import React, { useEffect, useState } from 'react';
import axios from './axios';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import './Payment.css';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal, getBasketMap } from './Reducer';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { db } from './firebase';

function Payment() {
  const [{ user, basket }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(true);
  const [processing, setProcessing] = useState('');
  const [succeed, setSucceed] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSecret = async () => {
      const res = await axios({
        method: 'POST',
        url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
      });

      setClientSecret(res.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true); //결제중
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceed(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: 'EMPTY_BASKET',
        });

        navigate('/orders');
      });
  };

  //카드번호 적을때마다 handleChange

  const handleChange = (event) => {
    setDisable(event.empty); //true if the value is empty.
    setError(event.error ? event.error.message : '');
  };

  return (
    <div className='payment'>
      <div className='payment_container'>
        <Link to='/checkout' className='checkoutlink'>
          <h1>
            장바구니로 돌아가기 ({basket?.length}개의 상품목록이 존재합니다)
          </h1>
        </Link>

        <div className='payment_section'>
          <div className='payment_title'>
            <h3>배달 받을 곳</h3>
          </div>
          <div className='payment_address'>
            <p>{user?.email}님의 주소</p>
            <p>강원도</p>
            <p>철원</p>
          </div>
        </div>
      </div>

      <div className='payment_section'>
        <div className='payment_title'>
          <h3>상품목록</h3>
        </div>
        <div className='payment_items'>
          {getBasketMap(basket).map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              amount={item.amount}
              hideButton
            />
          ))}
        </div>
      </div>
      <div className='payment_section'>
        <div className='payment_title'>
          <h3>결제</h3>
        </div>
        <div className='payment_details'>
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
            <div className='payment_priceContainer'>
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <p>
                      총액({basket.length} items) : <strong> {value}</strong>
                    </p>
                    <small className='subtotal_gift'>
                      <input type='checkbox' />
                      체크박스입니다
                    </small>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              />

              <button disabled={processing || disable || succeed}>
                <span>{processing ? <p>결제중입니다</p> : '결제하기'}</span>
              </button>
            </div>

            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
