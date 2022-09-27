import React from 'react';
import './Order.css';
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import { getBasketMap } from './Reducer';

function Order({ order }) {
  return (
    <div children='order'>
      <h2>주문</h2>
      <p>{moment.unix(order.data.created).format()}</p>
      <p className='order_id'>
        <small>{order.id}</small>
      </p>

      {getBasketMap(order.data.basket)?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          amount={item.amount}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className='order_total'> 최종주문 총액 : {value} </h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </div>
  );
}
export default Order;
