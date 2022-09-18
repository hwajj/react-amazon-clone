import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js/pure';
import { Elements } from '@stripe/react-stripe-js';
import { stripeApi } from './stripe';

const promise = loadStripe(stripeApi);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(
    () =>
      //사용자 변화를 감지
      auth.onAuthStateChanged((authUser) => {
        console.log(authUser);
        if (authUser) {
          dispatch({
            type: 'SET_USER',
            user: authUser,
          });
        } else {
          dispatch({
            type: 'SET_USER',
            user: null,
          });
        }
      }),
    []
  );
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path='/checkout'
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path='/login'
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path='/payment'
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
