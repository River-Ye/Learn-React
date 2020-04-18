const path = require('path');
// TODO: 1
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DEV_MODE = process.env.NODE_ENV === 'development';
console.log(`DEV_MODE:${DEV_MODE}`);

module.exports = {
  context: path.resolve('src'),
  mode: process.env.NODE_ENV,
  entry: {
    app: ['./index.js'],
  },
  devtool: DEV_MODE ? 'inline-source-map' : false,
  output: {
    // TODO: 1
    filename: DEV_MODE ? 'app.js' :  'app-[chunkhash].js',
    path: path.resolve('dist'),
  },
  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('node_modules'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: { loader: 'babel-loader' },
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
        include: path.resolve('src/css'),
      },
      // TODO: 2 start
      {
        test: /\.pug$/,
        use:[
          { 
            // https://github.com/webpack-contrib/html-loader
            loader: 'html-loader',
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: DEV_MODE,
              data: {
                DEV_MODE,
                MY_DATA: '我是從 webpack 傳過去的參數'
              }
            },
          }
        ],
        include: path.resolve('src/html'),
      },
      // TODO: 2 end
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2048,
              name: '[path][name].[ext]?[hash:10]',
              // https://github.com/webpack-contrib/file-loader#esmodule
              esModule: false,  // 新版的設定，要設成 false ，pug 裡的 img src="~img/xxxx.jpg" 才會正確載入
            },
          },
        ],
        include: path.resolve('src/img'),
      },
    ]
  },
  plugins: [
    // TODO: 3
    // /*
    new HtmlWebpackPlugin({
      template: './html/index.pug',
      filename: 'index.html'
    }),
  ],
  // */
  // TODO: 4 start
  devServer: {
    // /*
    // https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
    // HTML5 History API
    historyApiFallback: true,
    port: 3000,
    hot: true,
    // 可以用 ip 連線，預設是 localhost
    host: '0.0.0.0',
    // https://webpack.js.org/configuration/dev-server/#devserverstats-
    stats: 'minimal'
  },
  // */
  // TODO: 4 end
};