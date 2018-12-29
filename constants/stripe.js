const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
  ? 'sk_test_3HbSaD4TxIO4VUnhyupWotgv'
  : 'sk_test_3HbSaD4TxIO4VUnhyupWotgv';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
