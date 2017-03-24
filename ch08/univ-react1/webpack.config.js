var webpack = require('webpack');

module.exports = {
  devtool : 'source-map',
  entry: [
    './browser.js'
  ],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader'
    }]
  }
};
