const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  // stripe secret키
  'sk_test_51LiuHsKFhzE3ZBHLrLd3QibrEXqi1MZneffzbQ' +
    'kIctacsENX4FQucW2SWW7Lk6RXhcJJwNkHyJOO4xBtazsS8L0P00O0nmgZYY'
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// 라우트
app.get('/', (req, res) => res.status(200).send('Hello react'));

app.post('/payment/create', async (req, res) => {
  const total = req.qurey.total;
  console.log(total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

/**
 http://localhost:5001/clone-4ab73/us-central1/api
 */
