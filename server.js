var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
const port = process.env.PORT || 7770;

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(__dirname));

app.get('*',(req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at ${port}`);
});


const cors = require('cors')
const bodyParser = require('body-parser')

const CORS_WHITELIST = require('./constants/frontend')

const corsOptions = {
  origin: 'https://chefspert.now.sh/',
  optionSuccessStatus: 200
}

const configureServer = app => {
  app.use(cors(corsOptions));

  app.use(bodyParser.json());
}

module.exports = configureServer
