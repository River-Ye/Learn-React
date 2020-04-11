const webpack = require('webpack');
const path = require('path');

// TODO
// process.env.NODE_ENV 由 package.json npm run start 裡定義
const DEV_MODE = process.env.NODE_ENV === 'development';
console.log('process.env.NODE_ENV', process.env.NODE_ENV);

module.exports = {
  // mode 一定要加，只能是 development 或是 production 兩種
  // TODO
  mode: process.env.NODE_ENV,
  context: path.resolve('src'),
  entry: {
    'app': './app.js',
  },
  devtool: DEV_MODE ? 'inline-source-map' : false,
  output: {
    // 將打包好的檔發佈至 dist 資料夾
    path: path.resolve('dist'),
    // 打包後的 js 檔名
    filename: 'bundle.js',
  }
};