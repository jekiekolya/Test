const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'my-bundler.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
