const path = require('path');

const DEV_MODE = process.env.NODE_ENV === 'development';
console.log('process.env.NODE_ENV', process.env.NODE_ENV);

module.exports = {
  mode: process.env.NODE_ENV,
  context: path.resolve('src'),
  entry: './index.js',
  devtool: DEV_MODE ? 'inline-source-map' : false,
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist')
  },
  resolve: {
    // 在 import 檔案, 如果不想寫完整的路徑
    // 可以加入這些目錄, 讓 webpack 自動尋找對的檔案
    modules: [
      path.resolve('src'),
      path.resolve('node_modules'), // 這個一定要加，沒加會找不到 src
    ],
  },
  module:{
    rules:[
      {
        test: /\.(js|jsx)$/,
        use: { loader: 'babel-loader' },
        exclude: /node_modules/,
      },
      /* 多 loader 組合
      寫法1
        可寫成一行，或是使用 use, 處理順序是由後往前, 舊寫法, 不推
        loader: 'style-loader!css-loader?sourceMap!sass-loader?sourceMap'
      寫法 2, 字串
        use: [
          'style-loader',
          'css-loader?sourceMap',
          'sass-loader?sourceMap'
        ],
      https://webpack.js.org/configuration/module/#rule-use
      */
      // TODO: 2 start
      // /*
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },     // 處理順序是從後往前
          { loader: 'css-loader' },
          { loader: 'sass-loader' },      // 也可以處理 scss
        ],
        include: path.resolve('src/css'), // 指定資料夾，會比較快些
      }, 
      // */
      // TODO: 2 end
      // TODO: 3 start
      // /*
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 2048, // 小於 2048 bytes(2k) 的圖檔, 自動變成 base64 字串，尺寸大小沒有標準，單位是 bytes
            // 檔名： [資料夾][檔名].[副檔名]?[檔案的hash]
            name: '[path][name].[ext]?[hash:10]', // 長度不一定要是10，看需求
          },
        },
        include: path.resolve('src/img'),
      }, 
      // */
      // TODO: 3 end
    ]
  }
}