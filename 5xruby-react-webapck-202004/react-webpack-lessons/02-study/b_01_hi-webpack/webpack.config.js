const path = require('path');

module.exports = {
  entry: './src/index.js',
  // 由 package script command line 設定
  // mode: 'development', 
  // https://webpack.js.org/configuration/devtool/
  devtool: 'inline-source-map',    // 本機開發可以留
  // devtool: false,               // 正式上線會設定false，避免有心人士看到
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
  },
};
