const webpack = require('webpack');
const path = require('path');

const env = 'production';

const config = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-2', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: env
    }),
  ],
  devtool: 'source-map'
};

if (env === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  );
}

module.exports = config;
