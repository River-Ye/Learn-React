const path = require('path');

module.exports = {
  entry: './src/index.js',
  // 由 package script command line 設定
  // mode: 'development', 
  // https://webpack.js.org/configuration/devtool/
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
  },
};
