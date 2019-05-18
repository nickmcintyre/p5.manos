const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'p5.manos.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  }
};
