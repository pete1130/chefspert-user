const FRONTEND_DEV_URLS = ['https://chefspert.now.sh/' ];

const FRONTEND_PROD_URLS = [
  'https://chefspert.now.sh/',
  'https://chefspert.now.sh/'
]

module.exports = process.env.NODE_ENV === 'production'
  ? FRONTEND_PROD_URLS
  : FRONTEND_DEV_URLS;
