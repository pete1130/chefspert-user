const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'https://chefspert.now.sh/'
  : 'https://chefspert.now.sh/';

export default PAYMENT_SERVER_URL;

